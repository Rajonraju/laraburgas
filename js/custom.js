$(function () {
    // preloader js
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut(1000);
    })
    //    counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
    // slider js
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        autoplaySpeed: 2000,
    });
       // navbar bg js
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
         if (scrolling > 200) {
            $('.back_top').fadeIn(500);
        } else {
            $('.back_top').fadeOut(500);
        }
        
    })
    // back-top js
    $('.back_top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);

    })
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    // wow js
    new WOW().init();
    
    // typed js
     
    $(".typed").typed({
		strings: ["creative template"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 800,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

});
