!function(e){"use strict";e.fn.andSelf=function(){return this.addBack.apply(this,arguments)},e(window).on("load",function(){e(".section-loader").fadeOut("slow");var a=e(".portfolioContainer");a.isotope({filter:"*",animationOptions:{queue:!0}}),e(".portfolio-nav li").click(function(){e(".portfolio-nav .current").removeClass("current"),e(this).addClass("current");var t=e(this).attr("data-filter");return a.isotope({filter:t,animationOptions:{queue:!0}}),!1})});e(".navbar-toggler");var a=e(".overlay"),t=e(".navbar-collapse");function s(){e("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e(this).removeClass()})}function i(a,t){if(a)var s="h3 text-center fadeInUp animated text-success";else s="h3 text-center shake animated text-danger";e("#msgSubmit").removeClass().addClass(s).text(t)}e(".navbar-toggler, .navbar-nav li a, .overlay").on("click",function(){e(".navbar-toggler").toggleClass("active"),a.toggleClass("active"),t.toggleClass("active")}),e("#jv-header").onePageNav({currentClass:"active",changeHash:!1,scrollSpeed:750,scrollThreshold:.5}),e("[data-fancybox]").fancybox({}),new WOW({mobile:!1}).init(),e(window).on("scroll",function(){e(window).scrollTop()>=50?e(".nav-scroll").addClass("nav-strict"):e(".nav-scroll").removeClass("nav-strict")}),e(".determinate").each(function(){var a=e(this).text();e(this).css("width",a).empty().append('<i class="fa fa-circle"></i>')}),e("#portfolio-item").mixItUp(),e("#jv-client-review").owlCarousel({loop:!1,responsiveClass:!0,nav:!0,autoplay:!1,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},1170:{items:3}}}),e(".jv-project-testimonial").owlCarousel({loop:!0,responsiveClass:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,pagination:!1,responsive:{0:{items:1},768:{items:1},1170:{items:1}}}),e("#single-project").owlCarousel({loop:!1,responsiveClass:!0,nav:!1,dots:!0,autoplay:!1,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,pagination:!1,responsive:{0:{items:1},768:{items:1},1170:{items:1}}}),e(".jv-single-project-slide-by-side").owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],dots:!1,autoplay:!1,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,pagination:!1,responsive:{0:{items:1},768:{items:1},1170:{items:1}}}),e("#jv-single-client-review").owlCarousel({loop:!1,responsiveClass:!0,nav:!0,autoplay:!1,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:1},1170:{items:1}}}),e("#jv-2-client-review").owlCarousel({loop:!1,responsiveClass:!0,nav:!0,autoplay:!1,smartSpeed:450,stopOnHover:!0,animateIn:"slideInRight",animateOut:"slideOutLeft",autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},1170:{items:2}}}),e("#contactForm").validator().on("submit",function(a){var t,o,n;a.isDefaultPrevented()?(s(),i(!1,"Did you fill in the form properly?")):(a.preventDefault(),t=e("#name").val(),o=e("#email").val(),n=e("#message").val(),e.ajax({type:"POST",url:"process.php",data:"name="+t+"&email="+o+"&message="+n,success:function(a){"success"==a?(e("#contactForm")[0].reset(),i(!0,"Message Sent!")):(s(),i(!1,a))}}))})}(jQuery);