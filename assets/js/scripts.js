(function ($) {
  
    $(document).ready(function(){
       $('.section--2-modal #videoModal').on('hidden.bs.modal', function () {
    var $iframe = $(this).find('iframe');
    $iframe.attr('src', $iframe.attr('src')); // reload iframe to stop video
  });
       function animateValue(id, start, end, duration) {
            let obj = document.getElementById(id);
            let range = end - start;
            let minTimer = 50;
            let stepTime = Math.abs(Math.floor(duration / range));
            
            stepTime = Math.max(stepTime, minTimer);
            
            let startTime = new Date().getTime();
            let endTime = startTime + duration;
            let timer;
            
            function run() {
                let now = new Date().getTime();
                let remaining = Math.max((endTime - now) / duration, 0);
                let value = Math.round(end - (remaining * range));
                obj.innerHTML = value + "+";
                if (value == end) {
                    clearInterval(timer);
                }
            }
            
            timer = setInterval(run, stepTime);
            run();
        }
        
        // Start animation when section is in viewport
        function checkIfInView() {
            const windowHeight = $(window).height();
            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + windowHeight;
            
            $('.metric-card').each(function() {
                const element = $(this);
                const elementTop = element.offset().top;
                const elementBottom = elementTop + element.height();
                
                // Check if in view
                if (elementBottom >= windowTop && elementTop <= windowBottom) {
                    if (!element.hasClass('animated')) {
                        element.addClass('animated');
                        
                        // Animate each value
                        setTimeout(function() {
                            animateValue("value1", 0, 35, 2000);
                        }, 200);
                        
                        setTimeout(function() {
                            animateValue("value2", 0, 29, 2000);
                        }, 600);
                        
                        setTimeout(function() {
                            animateValue("value3", 0, 100, 2000);
                        }, 1000);
                    }
                }
            });
        }
        
        // Check on load and scroll
        $(window).on('scroll resize', checkIfInView);
        $(window).trigger('scroll');
        
        // Add hover effect with jQuery
        $('.metric-card').hover(
            function() {
                $(this).css('transform', 'translateY(-5px)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
            }
        );
    });
      $(window).scroll(function() {
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
    });

})(jQuery);
// $(document).ready(function () {
//   $('#exampleModal').modal('show');
// });
