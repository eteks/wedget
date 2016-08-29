/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
	
	
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});
	
});

//*PORTFOLIO AND CLIENTS*//
(function ($) {
    "use strict";


    $(document).ready(function() {

        // jQuery DemoPanel
        $("#panel_open").click(function(){
            $(".setting_panel").animate({left:"-226px"});
            $(this).hide();
            $("#panel_close").css("display","block");
        }); 

        $("#panel_close").click(function(){
            $(".setting_panel").animate({left:"0px"});
            $(this).hide();
            $("#panel_open").css("display","block");
        }); 

        // jQuery Custom scrollbar
        $("body").niceScroll({
            cursorcolor: "#57BDDB",
            cursorborderradius: "0px",
            cursorwidth: "10px",
            cursorminheight: 100,
            cursorborder: "0px solid #fff",
            zindex: 9999,
            autohidemode: true,
            horizrailenabled:false
        });

        // jQuery Stick menu        
        $(".navbar").sticky({topSpacing: 0});
        
        // jQuery One page nav
        $(".nav").onePageNav();
        
        // jQuery Portfolio filter
        $("#portfolio_list").isotope({
          // options
          itemSelector: '.pitem',
          layoutMode: 'fitRows'
        }); 
        
        
        // jQuery Owl Carousel
        $(".partner-list").owlCarousel({
            pagination : false,
            navigation : true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
        
        
        // jQuery counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        
        // jQuery Lightbox
        $(".litebox").liteBox();    
        
        // jQuery Parallax
        $('.home-parallax, .features-bg, .parallax-bg').scrolly({bgParallax: true});
        
        
        
        // jQuery Contact form validation
        $('form').validatr({
            location:"bottom"
        }); 
        
        $("#form-messages").hover(function() {
            $(this).delay(350).fadeOut('slow');
        });
        
        

        
    });





    /* ==============================================
     Smooth Scroll To Anchor
     =============================================== */

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar a,.btn,.to-top').bind('click', function(event) {
            var $anchor = $(this);
            $('html').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });




    $(window).load(function(){

        
        
        // Preloader & Option Panel
        $('.spinner').fadeOut();
        $('.setting_panel').show();
        
        $('#preloader').delay(350).fadeOut('slow');
        
        $('body').delay(350);
        

        // Portfolio Items
        var $container = $('#portfolio_list');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
     
        $('.portfolio-filters li').click(function(){
            $('.portfolio-filters .active').removeClass('active');
            $(this).addClass('active');
     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        });
    });

}(jQuery)); 


/*Testimonials*/
$(".testimonials-carousel ul").owlCarousel({
        items: 1,
        navigation: false,
        pagination: true,
        singleItem:true,
        autoPlay: true,
        navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
        transitionStyle: "backSlide"
    });

    $('.clients-carousel').owlCarousel({
        items: 5,
        autoPlay: true,
        pagination: false
    });

    ////// mailchimp //////
    $(".subscribe-form").ajaxChimp({
        callback: mcCallback,
        url: "http://cantothemes.us8.list-manage2.com/subscribe/post?u=37a0cb83e98c8633253ad0acd&id=03d8ef0996" // Replace your mailchimp post url inside double quote "".  
    });

    function mcCallback (res) {
        if(res.result === 'success') {
            $('.subscribe-result').html('<i class="pe-7s-check"></i>' + res.msg).delay(500).slideDown(1000).delay(10000).slideUp(1000);
        }else if(res.result === 'error'){
            $('.subscribe-result').html('<i class="pe-7s-close-circle"></i>' + res.msg).delay(500).slideDown(1000).delay(10000).slideUp(1000);
        }
    }




/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.402789, 91.822156),
        map: map,
		icon: 'img/icons/map-marker.png',
    });
}


// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

