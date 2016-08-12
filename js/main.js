jQuery(document).ready(function ($) {

  // Slider

	var slideCount = $('.slider .slide-nav .slide').length;
	var slideWidth = $('.slider .slide-nav .slide').width();
	var slideHeight = $('.slider .slide-nav .slide').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('.slider').css({ width: slideWidth, height: slideHeight });

	$('.slider .slide-nav').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('.slider .slide-nav .slide:last-child').prependTo('.slider .slide-nav');

    function moveLeft() {
        $('.slider .slide-nav').animate({
            left: + slideWidth
        }, 400, function () {
            $('.slider .slide-nav .slide:last-child').prependTo('.slider .slide-nav');
            $('.slider .slide-nav').css('left', '');
        });
    };

    function moveRight() {
        $('.slider .slide-nav').animate({
            left: - slideWidth
        }, 400, function () {
            $('.slider .slide-nav .slide:first-child').appendTo('.slider .slide-nav');
            $('.slider .slide-nav').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        return false;
    });

    $('a.control_next').click(function () {
        moveRight();
        return false;
    });

});
// End Slider




// Scroll to top
$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();

		}
    console.log(this);
	});
	console.log(this);
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},
                            800);
	});
	console.log(this);
});
// End Scroll



// Hide Nav
$(document).ready(function(){

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('.nav').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
});
//  End hide nav


// Hide Nav
$(document).ready(function(){

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.mobile-menu').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('.mobile-menu').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.mobile-menu').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
});
//  End hide mobile-nav


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
