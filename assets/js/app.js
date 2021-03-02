$(function() {

    let header = $('#header');
    let introHeight = $('#intro').innerHeight();
    let scrollOffset = $(window).scrollTop(); //current position scroll on page

    // fixed header
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop(); // position scroll on live srolling

        checkScroll(scrollOffset); 
    });

    function checkScroll (scrollOffset) {
        if( scrollOffset >= ( introHeight - header.innerHeight() ) ) {
            header.addClass('header--fixed');
        } else {
            header.removeClass('header--fixed');
        }
    };

    // Smoth scroll
     
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top; // высота в пикселах от блока к верху страницы

        $('.nav .nav__link').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset - header.innerHeight(),
        }, 800)

        $('#nav').removeClass('nav--active');
        $('#navToogle').removeClass('nav-toogle--active');
    });


    // Menu nav toggle

    $('#navToogle').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('nav--active');
        $(this).toggleClass('nav-toogle--active');
    })



    // Accordion

    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
    })


    // hide menu on mobile when we ratate phone
    $(window).on('resize', function() {
        // hide menu on mobile on click menu item
        $('#nav').removeClass('nav--active');
        $('#navToogle').removeClass('nav-toogle--active');
    });


    // Slider

    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    let allert = $("body div[style^='margin']");
    let footAllert = $('div.cbalink');
    setTimeout(function() {
        allert.css({
            'display': 'none',
        }),
        footAllert.css({
            'display': 'none',
        });

    }, 10);


});