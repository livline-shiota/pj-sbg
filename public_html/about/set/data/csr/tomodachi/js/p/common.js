//IE用背景画像固定
if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
	$('body').on("mousewheel", function () {
		event.preventDefault();
		var wd = event.wheelDelta;
		var csp = window.pageYOffset;
		window.scrollTo(0, csp - wd);
	});
}

//カルーセル
$('.btn_library').on('click', function() {
	var list = $(this).parent().find(".list_library_inner").find(".elm_list_library");
	var listL = list.css('marginLeft').replace("px", "");
	var listW = list.find("ul:first-of-type").width() * -0.5;
	var elmList = list.find("ul").find("li").outerWidth(true);
	if($(list).is(':animated')){
	} else {
		if($(this).hasClass("next")) {
			if(listL <= listW) {
				listL = 0;
				$(list).css("marginLeft",listL);
			}
			listL -= elmList;
		} else {
			if(listL >= 0) {
				listL = listW;
				$(list).css("marginLeft",listL + "px");
			}
			listL = (Math.abs(listL) - elmList) * -1;
		}

		if($(this).parent().find(".list_library_inner").hasClass("list_movie_inner")) {
			var ml = Math.abs(listL / 870) + 1;
			if(ml > 3) {
				ml = 1;
			}
			$(".movie_position span").removeClass("on_movie");
			$(".movie_position span:nth-of-type(" + ml + ")").addClass("on_movie");
		}

		$(list).animate({marginLeft: listL + "px"}, 500);
	}
});

$(document).on("click", ".movie_position span", function () {
	if($(".list_movie_inner .elm_list_library").is(':animated')){
	} else {
		var index = $(".movie_position span").index(this);
		$(".list_movie_inner .elm_list_library").animate({marginLeft: -870 * index + "px"}, 500);

		$(".movie_position span").removeClass("on_movie");
		$(this).addClass("on_movie");
	}
});

//タイトル省略
$(".topics_title").each(function(){
	var txt = $(this).text();
	if(txt.length > 26){
		txt = txt.substr(0, 26);
		$(this).text(txt + "･･･");
	}
});

//メインビジュアルアニメーション
$('#sbg-appshell-v1-contents main').vegas({
	timer: false,
	transitionDuration: 4000,
	animationDuration: 8000,
	slides: [
		{ src: '/corp/set/data/csr/tomodachi/img/p/mv01.jpg' },
		{ src: '/corp/set/data/csr/tomodachi/img/p/mv02.jpg' },
		{ src: '/corp/set/data/csr/tomodachi/img/p/mv03.jpg' },
		{ src: '/corp/set/data/csr/tomodachi/img/p/mv04.jpg' }
	],
	transition: 'zoomOut'
});

//カルーセルアニメーション
$('.inviewfadeInUp').on('inview', function(event, isInView){
	if (isInView) {
		$(this).addClass('fadeInUp');
	}
});

$('.inviewfadeInImage').on('inview', function(event, isInView){
	if (isInView) {
		if($(this).hasClass("viewBG02")) {
			$(this).removeClass("viewBG02");
			$(this).parent().parent().parent().find('.voice_bg02').animate({opacity: '0'}, 1000);
		} else {
			$(this).addClass("viewBG02");
			$(this).parent().parent().parent().find('.voice_bg02').animate({opacity: '1'}, 1000);
		}
	}
});

$(function() {
	var y = $("#sbg-appshell-v1-contents nav").offset().top;
	var topicsY = $("#topics").offset().top;
	var supportY = $("#link04").offset().top + 30;
	var actionY = $("#link03").offset().top - 290;
	var voiceY = $("#voice").offset().top - 290;
	var aboutY = $("#about").offset().top - 290;

	var hVoice = $(window).height() / 2 - 160;
	$(window).on( 'scroll resize', scrollAction );
	scrollAction();
	function scrollAction () {
		var wy = $(window).scrollTop();
		if(wy >= aboutY && wy < voiceY) {
			$("nav ul .menu_tomodachi a").css({"background": "#ffffff", "color": "#002a83"});
			$("nav ul .menu_tomodachi:nth-of-type(2) a").css({"background": "#002a83", "color": "#ffffff"});
		} else if(wy >= voiceY && wy < actionY) {
			$("nav ul .menu_tomodachi a").css({"background": "#ffffff", "color": "#002a83"});
			$("nav ul .menu_tomodachi:nth-of-type(3) a").css({"background": "#002a83", "color": "#ffffff"});
		} else if(wy >= actionY && wy < supportY) {
			$("nav ul .menu_tomodachi a").css({"background": "#ffffff", "color": "#002a83"});
			$("nav ul .menu_tomodachi:nth-of-type(4) a").css({"background": "#002a83", "color": "#ffffff"});
		} else if(wy >= supportY && wy < topicsY) {
			$("nav ul .menu_tomodachi a").css({"background": "#ffffff", "color": "#002a83"});
			$("nav ul .menu_tomodachi:nth-of-type(5) a").css({"background": "#002a83", "color": "#ffffff"});
		} else {
			$("nav ul .menu_tomodachi a").css({"background": "#ffffff", "color": "#002a83"});
		}


		if(y < wy + 100) {
			$("#sbg-appshell-v1-contents nav").css({"position": "fixed", "top": "100px"});
		} else {
			$("#sbg-appshell-v1-contents nav").css({"position": "relative", "top": "0"});
		}

		$(".voice_inner").each(function(){
			var vy = $(this).offset().top;
			if(vy < wy + 350 && vy > wy - 839) {
				$(this).children(".voice_elm01").css({"position": "fixed", "top": "350px"});
			} else if(vy < wy - 839 && vy > wy - 1800) {
				$(this).children(".voice_elm01").css({"position": "absolute", "top": "1000px"});
			} else {
				$(this).children(".voice_elm01").css({"position": "absolute", "top": "0"});
			}

			if(vy < wy - 6 && vy > wy - 839) {
				$(this).children(".voice_elm02").css({"position": "fixed", "top": "600px"});
			} else if(vy < wy - 839 && vy > wy - 1800) {
				$(this).children(".voice_elm02").css({"position": "absolute", "top": "1245px"});
			} else {
				$(this).children(".voice_elm02").css({"position": "absolute", "top": "600px"});
			}

			if(vy < wy - 410 && vy > wy - 839) {
				$(this).children(".voice_elm03").css({"position": "fixed", "top": "800px"});
			} else if(vy < wy - 839 && vy > wy - 1800) {
				$(this).children(".voice_elm03").css({"position": "absolute", "top": "1440px"});
			} else {
				$(this).children(".voice_elm03").css({"position": "absolute", "top": "1200px"});
			}
			if(vy < wy - 1800) {
				$(this).children(".inviewfadeInImage").addClass("viewBG02");
			}
		});
	}

	$('a[href^="#"]').click(function(){
		var wy = $(window).scrollTop();
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 90;
		if(href == "#link02") {
			position -= ($(window).height() / 2) - 250;
		}

		if($("#sbg-appshell-v1-contents nav").css("position") != "fixed") {
			position -= 90;
		};
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

	//movie現在表示
	var numMovie = $(".list_movie_inner .elm_list_library ul").outerWidth(true) / 1740;
	var btnMovie = "";
	for(var i=0;i<numMovie;i++) {
		btnMovie += "<span></span>"
	}
	$('.movie_position').html(btnMovie);
	$('.movie_position span:first-of-type').addClass("on_movie");

	//メインビジュアル下カルーセル
	$('.list_image').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="list_image_wrap"></div>');

		var listWidth = $('#list_image_wrap').children('ul').children('li').width();
		var listCount = $('#list_image_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#list_image_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#list_image_wrap ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#list_image_wrap').css({left:'0'});
			$('#list_image_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},100000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},100000);
		};

		$('#list_image_wrap ul').clone().appendTo('#list_image_wrap');
	});
});