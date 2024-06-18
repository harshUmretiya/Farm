$('#s1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    navText:['prev','next'],
    smartSpeed:500,

})
$('#s2').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1,
    navText:['prev','next'],
    smartSpeed:500,
    dots:true,

})
$('#s3').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    navText:['prev','next'],
    smartSpeed:500,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('#s4').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1,
    navText:false,
    smartSpeed:500,
    dots:true,
    nav:false,

})
$('#about1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    navText:false,
    smartSpeed:500,
    dots:false,
    nav:false,
    animateOut: 'fadeOut',
  animateIn: 'fadeIn'

})
$('#about2').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1,
    navText:false,
    smartSpeed:500,
    dots:false,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            dots:false
        }
    }

})
$('#canvas').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:1,
    navText:false,
    smartSpeed:500,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,

})
$('#s5').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    // items:6,
    navText:false,
    smartSpeed:500,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        425:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            // loop:false
        }
    }

})
$('#s6').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:3,
    navText:['prev','next'],
    smartSpeed:500,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            dots:false
        }
    }

})
$('#aboutteam').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    items:3,
    nav:false,
    smartSpeed:500,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
        }
    }

})
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 700) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  var btn = $('.bbtn15');
  btn.hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });  



var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function(event) {
 
          new WOW().init();

})

wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          })
          wow.init();


