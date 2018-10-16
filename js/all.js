$(document).ready(function() {
	

     $(".owl-carousel").owlCarousel({
    	autoplaySpeed: 1000,
    	autoplay: false,
    	autoplayTimeout: 2000, 
   		margin: 10,
    	nav: true,
    	dots:false,
    	items: 1,
    	responsiveClass: true,
    	navContainer:".owl-carousel",
    	loop:true,
    	navText: ["<img src='images/back.svg'>","<img src='images/next.svg'>"]
   });
});
