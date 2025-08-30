(function ($) {
  if ($('.banner_bread').length) {
    // If it exists, add the 'regle_header' class to the <header> tag
    $('header').addClass('regle_header');
  }
  $('.section--5 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 5
      }
    }
  });

    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Counter animation function
    function animateCounter() {
      $('.counter-value').each(function () {
        if (!$(this).hasClass('animated') && isInViewport(this)) {
          $(this).addClass('animated');

          const $this = $(this);
          const target = parseInt($this.data('target'));
          const duration = 2000; // Animation duration in milliseconds
          const steps = 60; // Number of steps
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              $this.text(target + '+');
              clearInterval(timer);
            } else {
              $this.text(Math.floor(current) + '+');
            }
          }, duration / steps);
        }
      });
    }

    // Run on page load and scroll
    animateCounter();
    $(window).scroll(animateCounter);
    $('.section--2-modal #videoModal').on('hidden.bs.modal', function () {
      var $iframe = $(this).find('iframe');
      $iframe.attr('src', $iframe.attr('src')); // reload iframe to stop video
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('.header-inside').addClass('scrolled');
      } else {
        $('.header-inside').removeClass('scrolled');
      }
    });
    // Initialize Owl Carousel with ID targeting
    $("#slider--animate").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      nav: false,
      // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      dots: true,
      animateOut: 'fadeOut',
      onInitialized: startAnimation,
      onTranslate: resetAnimation,
      onTranslated: startAnimation
    });

    // Start animation for active slide
    function startAnimation(event) {
      var activeSlide = $('#slider--animate .owl-item.active').find('.owl-slide');
      activeSlide.find('.slide-title, .slide-subtitle, .slide-text').css({
        'opacity': '1',
        'transform': 'translateY(0)'
      });
    }

    // Reset animation for other slides
    function resetAnimation(event) {
      var allSlides = $('#slider--animate .owl-slide');
      allSlides.find('.slide-title, .slide-subtitle, .slide-text').css({
        'opacity': '0',
        'transform': 'translateY(30px)'
      });
    }

    // Header scroll effect


    // Style the background images
    $('.slide-bg').css({
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
      'z-index': '0'
    });
 

})(jQuery);
// $(document).ready(function () {
//   $('#exampleModal').modal('show');
// });