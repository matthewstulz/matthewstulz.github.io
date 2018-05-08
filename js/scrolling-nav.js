(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 54
  // });

})(jQuery); // End of use strict

$(document).ready(function () {

    // Scroll spy
    $('body').scrollspy({
        target: "#mainNav"
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#mainNav");
        if ($(this).scrollTop() >= 700) {
            navbar.addClass("navbar-custom").removeClass("bg-transparent");
            navbar.removeClass("navbar-top");
        } else if ($(this).scrollTop() < 700) {
          navbar.addClass("navbar-top");
          navbar.removeClass("navbar-custom").addClass("bg-transparent");
        }
    }
});
