var c, w, h, 
    ctx, opts,
    squareRange,
    squareAllowed,
    mostDistant,
    sinX = sinY = 0,
    cosX = cosY = 0,
    connections = [],
    toDevelop = [],
    data = [],
    all = [],
    tick = 0,
    tick2 = 0,
    totalProb = 0,
    animating = false,
    openingFlg = true,
    addRotVel = 0,
    Tau = Math.PI * 2;

window.onload = function () {
    init();
}

function canvasHeight(){
    var _h = window.innerHeight + 200 + 1000;
    return _h;
}

function canvasWidth(){
    var _w = window.innerWidth - 250;
    if(window.innerWidth <= 1279){
        _w = window.innerWidth;
    }
    return _w;
}

function chkDevice(){
    if($("#header .header-sp-menu-open").css("display") == "block"){
        return "sp";
    }
    return "pc";
}

function init(){

        bgdata = {
        circle : 0.000000
    }

    	c = document.getElementById('top-mv-bg');
    w = c.width = canvasWidth();
    h = c.height = canvasHeight();
    ctx = c.getContext( '2d' );

        opts = {
        range: 170,
        baseConnections: 3,
        addedConnections: 5,
        baseSize: 5,
        minSize: 1,
        dataToConnectionSize: .4,
        sizeMultiplier: .7,
        allowedDist: 50,
        baseDist: 40,
        addedDist: 30,
        connectionAttempts: 100,

        dataToConnections: 1,
        baseSpeed: .04,
        addedSpeed: .05,
        baseGlowSpeed: .4,
        addedGlowSpeed: .4,

        rotVelX: 0, 
        rotVelY: 0, 
        num: 23,
        speed: 3,
        degree: 62,
        repaintColor: '#111',
        connectionColor: 'hsla(0, 0%, 100%, alp)',
        rootColor: 'hsla(0, 0%, 100%, alp)',
        endColor: 'hsla(0, 0%, 100%, alp)',
        dataColor: 'hsla(0, 0%, 100%, alp)',
        wireframeAlpha: 1,
        wireframeWidth: .1,
        wireframeColor: 'hsla(240, 100%, 76%, alp)',

        depth: 194,
        focalLength: 510,
        moveScale: false,
        moveBackGround: true,
        rotation: true,
        individually : true,

                backGroundSize : 1000,
        backGroundAlpha: 1,
        tmpSpeed:0,
        tmpDegree: 0,
        tmpFocalLength : 0,
        tmpBackGroundSize : 0,

                centerX : 49,
        centerY : 22,

                fixed: false

    };

        if(chkDevice() == "sp"){
        opts.baseSize = 8;
        opts.centerY = 12;
        opts.backGroundSize = 295;
        opts.focalLength = 165;
    }

    changeSpeed();

        opts.vanishPoint = {
        x: w / (100 / opts.centerX),
        y: h / (100 / opts.centerY)
    };

        animating = false;

        opening();

        change();

        changeFixed();

        window.addEventListener('scroll', function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if(!openingFlg && !bgAnimetionStartFlg && scrollTop > 150){
            bgAnimetionStartFlg = true;
            bgZoomOutAnimetionStart();
        }
        if(!openingFlg && bgAnimetionStartFlg && scrollTop < 150){
            bgAnimetionStartFlg = false;
            bgZoomInnAnimetionStart();
        }

    });


    }

function changeFixed(){
    if(opts.fixed){
        $(".top-mv-bg").removeClass('noFixed');
        $("#wrapper").removeClass('noFixed');
        $("main").removeClass('noFixed');
    }else{
        $(".top-mv-bg").addClass('noFixed');
        $("#wrapper").addClass('noFixed');
        $("main").addClass('noFixed');
    }
}

function opening(){
    opts.tmpFocalLength = opts.focalLength;
    opts.tmpBackGroundSize = opts.backGroundSize;
    opts.focalLength = 1;

        var du = 1500;

        $({tick: 90}).animate( {tick: 1}, {
        duration: du + 1000,
        step: function() {
            tick += this.tick;
        }
    });

    $({focalLength: opts.focalLength}).animate( {focalLength: opts.tmpFocalLength}, {
        duration: du + 1000,
        step: function() { 
            opts.focalLength = this.focalLength;
        },
        complete : function(){
            openingComplete();
        }
    });

    $({backGroundAlpha: 1}).animate( {backGroundAlpha: 0}, {
        duration: du,
        step: function() { 
            opts.backGroundAlpha = this.backGroundAlpha;
        }
    });

    $({backGroundSize: opts.backGroundSize}).animate( {backGroundSize: opts.tmpBackGroundSize}, {
        duration: du - 500,
        step: function() { 
            opts.backGroundSize = this.backGroundSize;
        }
    });

    }

function openingComplete(){
    openingFlg = false;
}

function setMoveScale(){
    if(opts.moveScale){
        all.map( function( item ){ item.setMoveScale(); } );
    }
}

function setIndividually(){
    if(opts.individually){
        all.map( function( item ){ item.setRotVel(); } );
    }
}

function changeCenter(){
    resize();
    change();
}

function changeAllowedDist(){
    opts.allowedDist = Math.abs(opts.num - 70);
    change();
}

function changeSpeed(){

        opts.rotVelX = (Math.cos(opts.degree * (Math.PI / 180)) * opts.speed) / 2000;
    opts.rotVelY = (Math.sin(opts.degree * (Math.PI / 180)) * opts.speed) / 2000;

}

function change(){

        squareRange = opts.range * opts.range;
    squareAllowed = opts.allowedDist * opts.allowedDist;
    mostDistant = opts.depth + opts.range;


        sinX = sinY = 0;
    cosX = cosY = 0;

        connections = [];
    toDevelop = [];
    data = [];
    all = [];
    tick = 0;
    totalProb = 0;

    	connections.length = 0;
	data.length = 0;
	all.length = 0;
	toDevelop.length = 0;

		var connection = new Connection( 0, 0, 0, opts.baseSize );

    	connection.step = Connection.rootStep;
	connections.push( connection );
	all.push( connection );

	connection.link(connections);

    	while( toDevelop.length > 0 ){
		toDevelop[0].link();
		toDevelop.shift();
	}

	    setIndividually();

    	if( !animating ){
		animating = true;
		anim();
	}
}

function Connection( x, y, z, size ){

		this.x = x;
	this.y = y;
	this.z = z;
	this.size = size;

		this.screen = {};

		this.links = [];
	this.probabilities = [];
	this.isEnd = false;

	    this.rotVelX = 0;
    this.rotVelY = 0;

        this.moveScale = 0;

    	this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
}

Connection.prototype.link = function(){

		if( this.size < opts.minSize )
		return this.isEnd = true;

		var links = [],
			connectionsNum = opts.baseConnections + Math.random() * opts.addedConnections |0,
			attempt = opts.connectionAttempts,

						alpha, beta, len,
			cosA, sinA, cosB, sinB,
			pos = {},
			passedExisting, passedBuffered;

		while( links.length < connectionsNum && --attempt > 0 ){

				alpha = Math.random() * Math.PI;
		beta = Math.random() * Tau;
		len = opts.baseDist + opts.addedDist * Math.random();

				cosA = Math.cos( alpha );
		sinA = Math.sin( alpha );
		cosB = Math.cos( beta );
		sinB = Math.sin( beta );

				pos.x = this.x + len * cosA * sinB;
		pos.y = this.y + len * sinA * sinB;
		pos.z = this.z + len *        cosB;

				if( pos.x*pos.x + pos.y*pos.y + pos.z*pos.z < squareRange ){

					passedExisting = true;
			passedBuffered = true;
			for( var i = 0; i < connections.length; ++i )
				if( squareDist( pos, connections[ i ] ) < squareAllowed )
					passedExisting = false;

			if( passedExisting )
				for( var i = 0; i < links.length; ++i )
					if( squareDist( pos, links[ i ] ) < squareAllowed )
						passedBuffered = false;

			if( passedExisting && passedBuffered )
				links.push( { x: pos.x, y: pos.y, z: pos.z } );

					}

			}

		if( links.length === 0 )
		this.isEnd = true;
	else {
		for( var i = 0; i < links.length; ++i ){

						var pos = links[ i ],
					connection = new Connection( pos.x, pos.y, pos.z, this.size * opts.sizeMultiplier );

						this.links[ i ] = connection;
			all.push( connection );
			connections.push( connection );
		}
		for( var i = 0; i < this.links.length; ++i )
			toDevelop.push( this.links[ i ] );
	}
}

Connection.prototype.setMoveScale = function(){
    if(Math.floor( Math.random() * 2 )){
        this.moveScale = (Math.floor( Math.random() * 11 ) + 20);
    }else{
        this.moveScale = (Math.floor( Math.random() * 11 ) + 5) * -1;
    }
}

Connection.prototype.setRotVel = function(){

        if(Math.floor( Math.random() * 2 )){
        this.rotVelX = (Math.floor( Math.random() * 10 ) + 1) / 10000;
    }else{
        this.rotVelX = (Math.floor( Math.random() * 10 ) + 1) / 10000 * -1;
    }
    if(Math.floor( Math.random() * 2 )){
        this.rotVelY = (Math.floor( Math.random() * 10 ) + 1) / 10000;
    }else{
        this.rotVelY = (Math.floor( Math.random() * 10 ) + 1) / 10000 * -1;
    }
}

Connection.prototype.step = function(){
    this.setIndividuallyScreen();
	for( var i = 0; i < this.links.length; ++i ){
		ctx.moveTo( this.screen.x, this.screen.y );
		ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
	}
}

Connection.rootStep = function(){
    this.setIndividuallyScreen();
	for( var i = 0; i < this.links.length; ++i ){
		ctx.moveTo( this.screen.x, this.screen.y );
		ctx.lineTo( this.links[ i ].screen.x, this.links[ i ].screen.y );
	}
}


Connection.prototype.draw = function(){

        var gradient = ctx.createRadialGradient(this.screen.x, this.screen.y, 0, this.screen.x, this.screen.y, this.screen.scale * this.size);
    gradient.addColorStop(0.0 , 'rgba(255,255,255, .7)');
    gradient.addColorStop(0.6 , 'rgba(255,255,255, .7)');
    gradient.addColorStop(1.0 , 'rgba(255,255,255, 0)');
    ctx.fillStyle = gradient;

        ctx.beginPath();
    try{
        ctx.arc( this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau );
    } catch( e ) {

            }
    ctx.fill();
}


function Data( connection ){

		this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
	this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();

		this.screen = {};

		this.setConnection( connection );
}

Data.prototype.reset = function(){

		this.setConnection( connections[ 0 ] );
	this.ended = 2;
}

Data.prototype.step = function(){

		this.proportion += this.speed;

		if( this.proportion < 1 ){
		this.x = this.ox + this.dx * this.proportion;
		this.y = this.oy + this.dy * this.proportion;
		this.z = this.oz + this.dz * this.proportion;
		this.size = ( this.os + this.ds * this.proportion ) * opts.dataToConnectionSize;
	} else 
		this.setConnection( this.nextConnection );

		this.screen.lastX = this.screen.x;
	this.screen.lastY = this.screen.y;
    this.setIndividuallyScreen();
}

Data.prototype.draw = function(){

		if( this.ended )
		return --this.ended; 

		ctx.beginPath();
	ctx.strokeStyle = this.screen.color;
	ctx.lineWidth = this.size * this.screen.scale;
	ctx.moveTo( this.screen.lastX, this.screen.lastY );
	ctx.lineTo( this.screen.x, this.screen.y );
	ctx.stroke();
}

Data.prototype.setConnection = function( connection ){

		if( connection.isEnd )
		this.reset();

		else {

				this.connection = connection;
		this.nextConnection = connection.links[ connection.links.length * Math.random() |0 ];

				this.ox = connection.x; 
		this.oy = connection.y;
		this.oz = connection.z;
		this.os = connection.size; 

				this.nx = this.nextConnection.x; 
		this.ny = this.nextConnection.y;
		this.nz = this.nextConnection.z;
		this.ns = this.nextConnection.size;

				this.dx = this.nx - this.ox; 
		this.dy = this.ny - this.oy;
		this.dz = this.nz - this.oz;
		this.ds = this.ns - this.os;

				this.proportion = 0;
	}
}

Connection.prototype.setIndividuallyScreen = Data.prototype.setIndividuallyScreen = function(){

		var x = this.x,
        y = this.y,
        z = this.z;

		var rotX2 = tick2 * (this.rotVelX + addRotVel),
        rotY2 = tick2 * (this.rotVelY + addRotVel);

		var cosX2 = Math.cos( rotX2 );
	var sinX2 = Math.sin( rotX2 );
	var cosY2 = Math.cos( rotY2 );
	var sinY2 = Math.sin( rotY2 );


	var Y = y;
	y = y * cosX - z * sinX;
	z = z * cosX + Y * sinX;

	var Z = z;
	z = z * cosY - x * sinY;
	x = x * cosY + Z * sinY;

    Y = y;
    y = y * cosX2 - z * sinX2;
	z = z * cosX2 + Y * sinX2;

        Z = z;
    z = z * cosY2 - x * sinY2;
	x = x * cosY2 + Z * sinY2;
	this.screen.z = z;

	z += opts.depth;

		this.screen.scale = opts.focalLength / z;
	this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
	this.screen.y = opts.vanishPoint.y + y * this.screen.scale;

	}

Connection.prototype.setScreen = Data.prototype.setScreen = function(){

		var x = this.x,
        y = this.y,
        z = this.z;    

	var Y = y;
	y = y * cosX - z * sinX;
	z = z * cosX + Y * sinX;

	var Z = z;
	z = z * cosY - x * sinY;
	x = x * cosY + Z * sinY;

		this.screen.z = z;

	z += opts.depth;

		this.screen.scale = opts.focalLength / z;
	this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
	this.screen.y = opts.vanishPoint.y + y * this.screen.scale;

	}

function squareDist( a, b ){
	var x = b.x - a.x,
        y = b.y - a.y,
        z = b.z - a.z;
	return x*x + y*y + z*z;
}

function anim(){

    	window.requestAnimationFrame( anim );

    	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = opts.repaintColor;
	ctx.fillRect( 0, 0, w, h );

	    bgUpdate();

        if(opts.rotation) ++tick;
	if(opts.individually) ++tick2;

    	var rotX = tick * (opts.rotVelX + addRotVel),
        rotY = tick * (opts.rotVelY + addRotVel);

    	cosX = Math.cos( rotX );
	sinX = Math.sin( rotX );
	cosY = Math.cos( rotY );
	sinY = Math.sin( rotY );


    	ctx.globalCompositeOperation = 'lighter';
	ctx.beginPath();
	ctx.lineWidth = opts.wireframeWidth;
	ctx.strokeStyle = opts.wireframeColor.replace( 'alp', opts.wireframeAlpha );
	all.map( function( item ){ item.step(); } );
	ctx.stroke();
	ctx.globalCompositeOperation = 'source-over';
	all.sort( function( a, b ){ return b.screen.z - a.screen.z } );
	all.map( function( item ){ item.draw(); } );

	}

function resize(){
    opts.vanishPoint.x = ( w = c.width = canvasWidth() ) / (100 / opts.centerX );
	opts.vanishPoint.y = ( h = c.height = canvasHeight() ) / (100 / opts.centerY );
	ctx.fillRect( 0, 0, w, h );
}

window.addEventListener( 'resize', function(){
	resize();
});

var bgAnimetionStartFlg = false;
var timeoutId, timeoutDelay = 700;
var depthStart, depthEnd, depthAdd = 50, depthDuration = 700;
var backGroundSizeStart, backGroundSizeEnd, backGroundSizeAdd;

function bgZoomOutAnimetionStart(){
    depthStart = opts.depth;
    depthEnd = opts.depth + depthAdd;
    $({depth: depthStart}).animate( {depth: depthEnd}, {
        duration: depthDuration,
        step: function() { 
            opts.depth = this.depth;
        },
        complete : function(){
        }
    });


    $({backGroundAlpha: 0}).animate( {backGroundAlpha: 0.5}, {
        duration: depthDuration,
        step: function() { 
            opts.backGroundAlpha = this.backGroundAlpha;
        }
    });

    $({wireframeAlpha: 1}).animate( {wireframeAlpha: 0}, {
        duration: depthDuration,
        step: function() { 
            opts.wireframeAlpha = this.wireframeAlpha;
        }
    });

    }

function bgZoomInnAnimetionStart(){
    $({depth: depthEnd}).animate( {depth: depthStart}, {
        duration: depthDuration,
        step: function() {
            opts.depth = this.depth;
        },
        complete : function(){
        }
    });


    $({backGroundAlpha: 0.5}).animate( {backGroundAlpha: 0}, {
        duration: depthDuration,
        step: function() { 
            opts.backGroundAlpha = this.backGroundAlpha;
        }
    });

    $({wireframeAlpha: 0}).animate( {wireframeAlpha: 1}, {
        duration: depthDuration,
        step: function() { 
            opts.wireframeAlpha = this.wireframeAlpha;
        }
    });
}

var easeOut = function (p) { 
    return p * (2 - p);
};

function drawEllipticalGradient(x, y, rw, rh, color, r){
    var rx = rw/Math.sqrt(3.5);
	var ry = rh/Math.sqrt(1);
	var cx = rw/2;
	var cy = rh/2;

        var alpha;
    rx = (rx == 0) ? 0.25 : rx;
	ry = (ry == 0) ? 0.25 : ry;


        	var r1 = ry * r;
    var rgb = [
        parseInt(color.substring(1,3), 16),
        parseInt(color.substring(3,5), 16),
        parseInt(color.substring(5,7), 16)
    ];

        var gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r1);
    for (var i = 0; i <= 1; i += 0.1) {
        alpha = 1 - i;
        gradient.addColorStop(i, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')');
    }
	ctx.fillStyle = gradient;


		ctx.fillRect(0,0, rw*2, rh*2);
}

function drawRadialGradient(x, y, rw, rh, color, r){
    var alpha;
    var rgb = [
        parseInt(color.substring(1,3), 16),
        parseInt(color.substring(3,5), 16),
        parseInt(color.substring(5,7), 16)
    ];
    var gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    for (var i = 0; i <= 1; i += 0.1) {
        alpha = (1 - opts.backGroundAlpha) - i;
        gradient.addColorStop(i, 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')');
    }
	ctx.fillStyle = gradient;
    ctx.fillRect(0,0, rw, rh);
}

function bgUpdate(){

        bgdata.circle = (Math.cos(new Date().getTime() / 1000) * 50 + 50);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);

        if(opts.moveBackGround){
        drawRadialGradient(opts.vanishPoint.x, opts.vanishPoint.y, w, h, '#3bbcff', opts.backGroundSize　+ ((opts.backGroundSize * .3) * (bgdata.circle * .005)));
        drawRadialGradient(opts.vanishPoint.x, opts.vanishPoint.y, w, h, '#FFFFFF', (opts.backGroundSize * .3) + ((opts.backGroundSize * .3) * (bgdata.circle * .007)));
    }else{
        drawRadialGradient(opts.vanishPoint.x, opts.vanishPoint.y, w, h, '#3bbcff', opts.backGroundSize);
        drawRadialGradient(opts.vanishPoint.x, opts.vanishPoint.y, w, h, '#FFFFFF', (opts.backGroundSize * .6));
    }
}

