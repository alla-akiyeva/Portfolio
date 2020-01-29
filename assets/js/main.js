$(window).on('load', function() {   
    
    // HIDE PRELAODER
    $(".preloader").addClass("hide-preloader");
  
});


$(document).ready(function($) {
	"use strict";
    
    // PORTFOLIO GALLERY 
    // $('.portfolio a').featherlightGallery({
	// 	previousIcon: '&#9664;',   
	// 	nextIcon: '&#9654;',         
	// 	galleryFadeIn: 100,
	// 	galleryFadeOut: 300    
	// });
	

	$(".front-content").on('click', function(event) {
		event.preventDefault();
		$('body, html').animate({
			scrollTop: $(".about").offset().top
		}, 1000);
	})


	// $(".front-content").on('wheel', function() {
	
	// 	$('body, html').animate({
	// 		scrollTop: $(".about").offset().top
	// 	}, 1000, function () {
	// 		return false;
	// 	});
	// });


// Trying different ways to trigger a scroll down to the next section. 

	// let last_known_scroll_position = 0;
	// let ticking = false;

	// function scrollToBio (scroll_pos) {
	// 	$('html, body').animate({
	// 		scrollTop: $(".about").offset().top
	// 	}, 1000);
	// }

	// window.addEventListener('scroll', function (e) {
	// 	last_known_scroll_position = window.scrollY;

	// 	if (!ticking) {
	// 		window.requestAnimationFrame(function () {
	// 			scrollToBio(last_known_scroll_position);
	// 			ticking = false;
	// 		});
	// 		ticking = true;
	// 	}
	
	// });

	// window.addEventListener('scroll', function (e) {
	// 	$('html, body').animate({
	// 		scrollTop: $(".about").offset().top
	// 	}, 1000);
	// 	console.log("heya");
	// })

	// var element = document.querySelector(".about");

	// window.addEventListener('scroll', function (e) {
	// 	element.scrollIntoView();
	// })

	// window.addEventListener('scroll',function(e) {
	// 	event.preventDefault();
	// 	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	// 		console.log("scrolling down");
	// 	} 
	// 	else {
	// 		console.log("scrolling up")
	// 	}

	// });
	
	////////////////////////////////////

	// function scrollDown (e) {
	// 	$('html, body').animate({
	// 		scrollTop: $(".about").offset().top
	// 	}, 1000);
	// }

	// $(".hero").addEventListener('scroll', scrollDown);

	////////////////////////////////////

	//document.getElementById("hero").addEventListener("scroll", scrollDown);


});