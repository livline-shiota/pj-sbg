$('.inviewfadeInLeft').bind('inview', function(event, isInView) {
	if (isInView) {
		$(this).addClass('fadeInLeft');
	}
});
$('.inviewfadeInRight').on('inview', function(event, isInView){
	if (isInView) {
		$(this).addClass('fadeInRight');
	}
});
$('.inviewfadeInUp').on('inview', function(event, isInView){
	if (isInView) {
		$(this).addClass('fadeInUp');
	}
});
$('.inviewfadeInLeft').bind('inview', function(event, isInView) {
	if (isInView) {
		$(this).addClass('fadeInLeft');
	}
});
$('.inviewfadeInRight').on('inview', function(event, isInView){
	if (isInView) {
		$(this).addClass('fadeInRight');
	}
});
$('.inviewfadeInUp').on('inview', function(event, isInView){
	if (isInView) {
		$(this).addClass('fadeInUp');
	}
});

$(function(){
	var url = location.search.replace("?","");
	if(url != "") {
		storyTab(url);
	}
});

function storyTab(e) {
	$(".story_all").css("display", "none");
	$(".story_" + e).css("display", "block");
	$(".btn_story").css("background", "#002a83");
	$(".btn_story a").css("color", "#ffffff");
	$(".btn_" + e).css("background", "#ffffff");
	$(".btn_" + e + " a").css("color", "#002a83");
}