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

	// $(window).resize(function(){
		
		$(".products-info li a").on("click", function(e){
			e.preventDefault();
			if(window.innerWidth < 480){
				console.log(window.innerWidth)
				var p = $(this).find("p");
				p.stop().toggle(600);
			}else if(window.innerWidth < 480){
				$(".products-info li a").off("click")
				p.css("display", "block")
			}
		});

	// });

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
