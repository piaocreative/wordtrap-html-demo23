$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1599,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1499,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    } 

    if ( $( '.products' ).length ) {
        $( '.products' ).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: false,
            arrows: true,
            prevArrow: $('.product-prev'),
            nextArrow: $('.product-next'),
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                }
            ]
        });
    } 

    if ( $( '.testimonials').length ) {
        $( '.testimonials').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true,
            prevArrow: $('.testimonial-prev'),
            nextArrow: $('.testimonial-next'),
        });
    }

    if ( $( '.teams').length ) {
        $( '.teams').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows:true
        });
    }

    if ( $( '.porfolio-slick' ).length ) {
        $( '.porfolio-slick' ).slick({
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.portfolio-prev'),
            nextArrow: $('.portfolio-next'),
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                }
            ]
        });
    }

    if ( $( '.recommend-slick' ).length ) {
        $( '.recommend-slick' ).slick({
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.recommend-prev'),
            nextArrow: $('.recommend-next'),
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                }
            ]
        });
    }

} );