(function ($) {
    "use strict"; // Start of use strict
    /*
         - Aos animation
         - To Top
         - Navbar
         - Background image
         - Counter
         - Popup Youtube & Gallery
         - Select 2 
         - Theia Sticky Sidebar
         - Owl Carousel
         - Toggle Password
         - Image Parallax
         - Preloader
        */
    /*-------------------------------------------
        Aos animation
    --------------------------------------------- */
    AOS.init({
        // once: true,
        // whether animation should happen only once - while scrolling down
    });
    /*-------------------------------------------
        To Top
    --------------------------------------------- */
    $('body').append('<div id="toTop" class="btn-top"><i class="fa-solid fa-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*-------------------------------------------
        Navbar
    --------------------------------------------- */
    //navbar add remove calss
    var header = $(".fixed-top");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('navbar-transfarent').addClass("navbar-bg");
        } else {
            header.removeClass("navbar-bg").addClass('navbar-transfarent');
        }
    });

    // Navbar Logo Hide Show
    var logo = $(".no-logo");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 81) {
            logo.removeClass('no-logo').addClass("has-logo");
        } else {
            logo.removeClass("has-logo").addClass('no-logo');
        }
    });

    // Navbar collapse hide
    $(".navbar-collapse .collapse-close").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
    /*-------------------------------------------
        Background image
    --------------------------------------------- */
    if ($('.background-image').length) {
        $(".background-image").css("backgroundImage", function () {
            var bg = "url(" + $(this).data("image-src") + ")";
            return bg;
        });
    }
    /*-------------------------------------------
        Counter
    --------------------------------------------- */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 1,
            time: 500,
        });
    }
    /*-------------------------------------------
        Popup Youtube & Gallery
    --------------------------------------------- */
    if ($('.popup-youtube').length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }

    if ($('.zoom-gallery').length) {
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    }
    if ($('.btn-gallery').length) {
        $('.btn-gallery').on('click', function (event) {
            event.preventDefault();

            var gallery = $(this).attr('href');

            $(gallery).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            }).magnificPopup('open');
        });
    }

    /*-------------------------------------------
        Select 2 
    --------------------------------------------- */
    if ($('.select2').length) {
        $('.select2').select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });
    }
    /*-------------------------------------------
        Theia Sticky Sidebar
    --------------------------------------------- */
    $(".content, .sidebar").theiaStickySidebar({
        additionalMarginTop: 90
    });
    /*-------------------------------------------
        Datepicker
    --------------------------------------------- */
    if ($('.datepicker').length) {
        $('.datepicker').datepicker({
            autoclose: true
        });
    }
    /*-------------------------------------------
        Owl Carousel
    --------------------------------------------- */
    // Blog carousel
    if ($('.blog-carousel').length) {
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    //Blog Masonry carousel
    if ($('.masonry-carousel').length) {
        $('.masonry-carousel').owlCarousel({
            loop: true,
            margin: 5,
            items: 2,
            dots: false,
            center: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
    }
    /*-------------------------------------------
        Toggle Password
    --------------------------------------------- */
    if ($('.toggle-password').length) {
        $(".toggle-password").click(function () {
            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("data-bs-toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }
    /*-------------------------------------------------
        Image Parallax
    ------------------------------------------------ */
    if ($('.image-parallax').length) {
        var image = document.getElementsByClassName('image-parallax');
        new simpleParallax(image, {
            delay: .6,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    }

    $(window).on("load", function () {
        /*-------------------------------------------------
            Preloader
        ------------------------------------------------ */
        setTimeout(function () {
            $('.page-loader-wrapper').fadeOut();
        }, 50);
    });

})(jQuery);