var pfF;

$(function () {
	$(window).on("load orientationchange resize", function() {
		if(Math.abs(window.orientation) === 90) {
			pfF = false;
			$(".bg_voice01").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice01.jpg");
			$(".bg_voice02").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice01_02.jpg");
			$(".bg_voice03").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice02.jpg");
			$(".bg_voice04").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice02_02.jpg");
			$(".bg_voice05").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice03.jpg");
			$(".bg_voice06").attr("src","/corp/set/data/csr/tomodachi/img/s/bg02_voice03_02.jpg");
		} else {
			pfF = true;
			$(".bg_voice01").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice01.jpg");
			$(".bg_voice02").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice01_02.jpg");
			$(".bg_voice03").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice02.jpg");
			$(".bg_voice04").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice02_02.jpg");
			$(".bg_voice05").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice03.jpg");
			$(".bg_voice06").attr("src","/corp/set/data/csr/tomodachi/img/s/bg_voice03_02.jpg");
		}
	});

	$('a[href^="#"]').click(function () {
		var speed = 400;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		$(".on-off").prop('checked', false);
		return false;
	});

	$('.list_image').each(function () {
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="list_image_wrap"></div>');

		var listWidth = $('#list_image_wrap').children('ul').children('li').width();
		var listCount = $('#list_image_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth) * (listCount);

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

		function loopsliderPosition() {
			$('#list_image_wrap').css({
				left: '0'
			});
			$('#list_image_wrap').stop().animate({
				left: '-' + (loopWidth) + 'px'
			}, 50000, 'linear');
			setTimeout(function () {
				loopsliderPosition();
			}, 50000);
		};

		$('#list_image_wrap ul').clone().appendTo('#list_image_wrap');
	});
});

//タイトル省略
$(".topics_title").each(function () {
	var txt = $(this).text();
	if (txt.length > 26) {
		txt = txt.substr(0, 26);
		$(this).text(txt + "･･･");
	}
});

$('#sbg-appshell-v1-contents main').vegas({
	timer: false,
	transitionDuration: 4000,
	animationDuration: 8000,
	delay: 8000,
	slides: [{
		src: '/corp/set/data/csr/tomodachi/img/s/mv01.jpg'
	}, {
		src: '/corp/set/data/csr/tomodachi/img/s/mv02.jpg'
	}, {
		src: '/corp/set/data/csr/tomodachi/img/s/mv03.jpg'
	}, {
		src: '/corp/set/data/csr/tomodachi/img/s/mv04.jpg'
	}],
	transition: 'zoomOut'
});

$('.inviewfadeInUp').on('inview', function (event, isInView) {
	if (isInView) {
		$(this).addClass('fadeInUp');
	}
});

$('.inviewfadeInImage').on('inview', function (event, isInView) {
	if (isInView) {
		$(this).parent().find('.voice_bg02').find('.voice_bg_inner').animate({
			opacity: '1'
		}, 1000);
	} else {
		$(this).parent().find('.voice_bg02').find('.voice_bg_inner').animate({
			opacity: '0'
		}, 1000);
	}
});

function viewTopic() {
	var listTopicsInner = [];
	var elmsT = document.getElementsByClassName( "list_topics_inner" );
	for(var i=0,l=elmsT.length;l>i;i++) {
		listTopicsInner[i] = new Flickity(elmsT[i],{
			contain: true,
			pageDots: false,
			prevNextButtons: false,
			wrapAround: true
		});
	};

	var listMovieInner = [];
	var elmsM = document.getElementsByClassName( "list_movie_inner" );
	for(var i=0,l=elmsM.length;l>i;i++) {
		listMovieInner[i] = new Flickity(elmsM[i],{
			contain: true,
			wrapAround: true
		});
	}
};
