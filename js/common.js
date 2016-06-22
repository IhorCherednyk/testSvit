$(function() {


	$(".slider").owlCarousel({
		loop:true,
		items:1,
		navSpeed:1000,
		dotsSpeed:1000
	});


	$(".l-anim").animated("fadeInLeft");
	$(".welcome-content").animated("fadeInLeft");
	$(".c-anim").animated("zoomIn");
	$(".r-anim").animated("fadeInRight");
	$(".welcome-aside").animated("fadeInRight");


	$(".toggle_mnu").click(function() {
		if ($(".sandwich").hasClass("active")) {
			$(".main-mnu ul").stop().fadeOut(600);
			$(".sandwich").toggleClass("active");
		} else {
			$(".main-mnu ul").stop().fadeIn(600);
			$(".sandwich").toggleClass("active");
		};
	});

});
