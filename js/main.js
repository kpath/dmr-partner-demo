jQuery(function($) {'use strict',

	//#main-slider
	// $(function(){
	// 	$('#main-slider.carousel').carousel({
	// 		interval: 10000
	// 	});
	// });


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});


	// $(window).load(function() {
	// 	var mainimageheight = $( '.slider-left' ).height() - 40;
	// 	// $( '.carousel-indicators--mobile' ) .css({'top': mainimageheight +'px'});
	// });



	// // Set front page 1 height.
	// var windowHeight = $( '.slider-left' ).height();

	
	// //alert(windowHeight);
	// //$( '.slider-right' ) .css({'min-height': windowHeight +'px'});


	// $(document).ready(function() {
	// 	// Set front page 1 height.
	// 	var windowHeight = $( '.slider-left' ).height();
	// 	//alert(windowHeight);
	// 	//$( '.slider-right' ) .css({'min-height': windowHeight +'px'});
	
	// });




	// Thanks to Maaaaark - https://github.com/maaaaark/bcSwipe/blob/master/jquery.bcSwipe.min.js
!function(t){t.fn.bcSwipe=function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);
 
// Swipe functions for Bootstrap Carousel
$('.carousel').bcSwipe({ threshold: 50 });


});