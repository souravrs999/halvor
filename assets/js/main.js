(function ($) {

    "use strict";

    //--------------------------------------------------
    // Preloader
    //--------------------------------------------------
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
        RevealLoad();
        startAnim();
        $('.preloader').removeClass()
    })

    //--------------------------------------------------
    // Web Load
    //--------------------------------------------------
    function RevealLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '0',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '0',
            })
            .to(logo, 0, {
                autoAlpha: 0,
                delay: '-0.4',
            })

        loadTL.play();
    }

    function HideLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '100%',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '100%',
            })
            .to(logo, 0, {
                autoAlpha: 1,
                delay: '-0.5'
            })

        loadTL.play();
    }

    $('.load-halvor').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (url) {
            window.location = url
        }, 1000, this.href);
        HideLoad();
    });


    //--------------------------------------------------
    // Animation Start
    //--------------------------------------------------
    function startAnim() {
        TweenMax.from('.logo', 1, {
            y: '100',
            autoAlpha: 0,
            delay: '.3',
            ease: Power4.easeInOut,
        })
        TweenMax.from('.navbars', 1, {
            y: '100',
            delay: '.3',
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
        TweenMax.from('#headmove', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })
        TweenMax.from('.bg-about', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })

        TweenMax.from('.sosmed', 1, {
            y: '100',
            ease: Power4.easeInOut,
            autoAlpha: 0,
            delay: .2,
        })

        TweenMax.from('.work', 1, {
            y: '100',
            ease: Power4.easeInOut,
            autoAlpha: 0,
            delay: .1,
        })




        TweenMax.to('.menu', 0, {
            autoAlpha: 0,
        })


    }




    //--------------------------------------------------
    // Work slider
    //--------------------------------------------------
    workSlider();

    function workSlider() {
        var workSlide = $('.work-slider .owl-carousel');
        workSlide.owlCarousel({
            loop: true,
            margin: 50,
            mouseDrag: true,
            autoplay: false,
            center: true,
            dots: true,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                600: {
                    items: 2,
                    margin: 30,
                },
                1000: {
                    items: 4,
                    margin: 40,
                }
            }
        });

    }


    //--------------------------------------------------
    // News slider
    //--------------------------------------------------
    newsSlider();

    function newsSlider() {
        var newsSlide = $('.news-slider .owl-carousel');
        newsSlide.owlCarousel({
            loop: true,
            margin: 50,
            mouseDrag: true,
            autoplay: false,
            center: true,
            dots: true,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                600: {
                    items: 3,
                    margin: 0,
                },
                1000: {
                    items: 4,
                    margin: 40,
                }
            }
        });

    }

    //--------------------------------------------------
    // Work detail slider
    //--------------------------------------------------
    teamSlider();

    function teamSlider() {
        var teamSlide = $('.team-slider .owl-carousel');
        teamSlide.owlCarousel({
            loop: true,
            margin: 50,
            mouseDrag: true,
            autoplay: false,
            center: true,
            dots: true,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                600: {
                    items: 3,
                    margin: 20,
                },
                1000: {
                    items: 4,
                    margin: 30,
                }
            }
        });

    }

    //--------------------------------------------------
    // Work detail slider
    //--------------------------------------------------
    detailSlider();

    function detailSlider() {
        var detailSlide = $('.detail-slider .owl-carousel');
        detailSlide.owlCarousel({
            loop: true,
            margin: 50,
            mouseDrag: true,
            autoplay: true,
            center: false,
            dots: false,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                600: {
                    items: 1,
                    margin: 20,
                },
                1000: {
                    items: 1,
                    margin: 30,
                }
            }
        });

    }

    VanillaTilt.init(document.querySelectorAll(".work-item"), {
        max: 15,
        speed: 400,
        perspective: 1000,
        scale: 1.04,
    });


    //--------------------------------------------------
    // Navbar
    //--------------------------------------------------

    var navbar = document.querySelector('.navbars')
    navbar.querySelector('.toggle').addEventListener('click', () => {

        navbar.classList.toggle('collapsed')

    })

    //--------------------------------------------------
    // Button
    //--------------------------------------------------

    // main button
    $(".button_su_inner").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle").removeClass("desplode-circle");
        $(this).prev(".su_button_circle").addClass("explode-circle");

    });

    $(".button_su_inner").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");

    });

    // social button
    $(".button_su_inner_social").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_social").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_social").removeClass("desplode-circle_social");
        $(this).prev(".su_button_circle_social").addClass("explode-circle_social");

    });

    $(".button_su_inner_social").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_social").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_social").removeClass("explode-circle_social");
        $(this).prev(".su_button_circle_social").addClass("desplode-circle_social");

    });

    // border button
    $(".button_su_inner_border").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_border").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_border").removeClass("desplode-circle_border");
        $(this).prev(".su_button_circle_border").addClass("explode-circle_border");

    });

    $(".button_su_inner_border").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_border").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_border").removeClass("explode-circle_border");
        $(this).prev(".su_button_circle_border").addClass("desplode-circle_border");

    });

    // service button
    $(".button_su_inner_service").mouseenter(function (e) {
        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_service").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_service").removeClass("desplode-circle_service");
        $(this).prev(".su_button_circle_service").addClass("explode-circle_service");

    });

    $(".button_su_inner_service").mouseleave(function (e) {

        var parentOffset = $(this).offset();

        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle_service").css({
            "left": relX,
            "top": relY
        });
        $(this).prev(".su_button_circle_service").removeClass("explode-circle_service");
        $(this).prev(".su_button_circle_service").addClass("desplode-circle_service");

    });

    luxy.init({
        wrapper: '#halvor',
        wrapperSpeed: '0.07',
    });


    //--------------------------------------------------
    // Parralax
    //--------------------------------------------------
    var headermove = $('#headmove').get(0);
    var parallaxInstance = new Parallax(headermove, {
        relativeInput: true,
        scalarX: 8,
        scalarY: 0,
        hoverOnly: false,
    });

    var headermove3 = $('#headmove-3').get(0);
    var parallaxInstance = new Parallax(headermove3, {
        relativeInput: true,
        scalarX: 8,
        scalarY: 0,
        hoverOnly: false,
    });

    var headermove2 = $('#headmove-2').get(0);
    var parallaxInstance = new Parallax(headermove2, {
        relativeInput: true,
        scalarX: 8,
        scalarY: 0,
        hoverOnly: false,
    });



})(jQuery);