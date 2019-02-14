$(document).ready(function(){
	// Header Slider 
  $('.active_slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,
		dots:true,
		navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	  
  });
  
	//Sticky Header
   $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 20) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });
  
   //MagnificPopUp
  $('.view').magnificPopup({
  type: 'image',
   gallery: {
    enabled: true
  },

});
	//Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 1000,
	});
	
	//Testimonial slider
	 $('.testimonials').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		nav:false,
		dots:true,
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	  
  });
  // ScrollUp
  $.scrollUp({
    scrollName: 'scrollUp', 
    topDistance: '300', 
    topSpeed: 300, 
    animation: 'fade', 
    animationInSpeed: 200,
    animationOutSpeed: 200, 
    scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  
  new WOW().init();
});
  
  
