$(document).ready(function(){
    // Smooth scrolling using jQuery easing
    $('#NavMenu li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
        }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#NavMenu li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#NavMenu',
        offset: 56
    });
   

    $(window).on("scroll", function () {
        var qScroll = $(this).scrollTop();
        if (qScroll > 1) {
            $("#NavMenu").addClass("menu-fixed");
        } else {
            $("#NavMenu").removeClass("menu-fixed");
        };
    });

    

  $('.products-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay:true,
    smartSpeed:1000,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay:true,
    smartSpeed:1000,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


    
    
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();


      
      



  });