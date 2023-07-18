(function ($) {
    "use strict";
    // mobile Menu area
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "1030",
        meanMenuContainer: '.mobile-menu'
    });

    // testimonial carousel
    $('.testimonial-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
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
    })
    $('.testimonial-four-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // services carousel
    $('.service-slider-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    // Partners carousel
    $('.partner-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
    $('.partner-four-grid-list-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            },
            1396: {
                items: 6
            }
        }
    })
    $('.partner-list-container-two .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,
        navText: ["<img src='img/carouselPrev.png'>", "<img src='img/carouselNext.png'>"],
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4,
            },
            1300: {
                items: 5,
            },
            1600: {
                items: 6
            }
        }
    })
    $('.portfolio-three-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='img/carouselPrev.png'>", "<img src='img/carouselNext.png'>"],
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
    // skill progress bar
    $('#skill-one').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-two').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-three').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    $('#skill-four').LineProgressbar({
        percentage: 75,
        fillBackgroundColor: '#FF6B00',
        backgroundColor: '#FFF0E5',
        radius: '15px',
        height: '10px',
        width: '100%'
    });
    // sidebar navigation
    jQuery('.scroll').onePgaeNav({
        wrapper: '#onepage-nav',
        speed: 1000,
    });
    // services three navigation
    jQuery('.scroll').onePgaeNav({
        wrapper: '#service-nav',
        speed: 1000,
    });

    // initialize AOS
    AOS.init();

    // mixitup
    var portfolioContainer = document.querySelector('.portfolio-massonary-container');
    if (portfolioContainer) {
        var mixer = mixitup(portfolioContainer);
        mixer.show()
            .then(function () {
                mixer.filter('.all');
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    }

    // resume tab
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
      });

    // counter up
    $('.counter').counterUp({
        time: 3000
    });

    
    // animated heading
    $(function () {
        $('.animate-heading').animatedHeadline(
            {
                animationType: 'clip'
            }
        );
    })

    // service slider action buttons

    var ServiceCarousel = $('.service-slider-container .owl-carousel');
    $(".slide-nav-btn").on("click", function() {
        var targetIndex = parseInt($(this).data("target")) - 1;
        
        // Move the carousel to the target slide
        ServiceCarousel.trigger("to.owl.carousel", [targetIndex, 30, true]);
      });

    //   preloader
    $(window).on('load', function() {
        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');
    });

})(jQuery);