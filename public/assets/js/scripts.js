(function($) {
    "use strict";

    //======================
    // Mobile menu
    //======================
    $("#mobile-menu-toggler").on("click", function(e) {
        e.preventDefault();
        $("nav.navbar > ul").slideToggle();
    });
    $(".has-menu-child").append('<i class="menu-dropdown ti-angle-down"></i>');

    if ($(window).width() <= 991) {
        $(".menu-dropdown").on("click", function() {
            $(this)
                .prev()
                .slideToggle("slow");
            $(this).toggleClass("ti-angle-down ti-angle-up");
        });
    }

    $(".app-caro").owlCarousel({
        autoplay: true,
        center: true,
        margin: 30,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(".partners-logo").owlCarousel({
        autoplay: true,
        margin: 30,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            }
        }
    });

    $(".gallery-caro").owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        items: true
    });

    //======================
    // GOOGLE MAP SCRIPT
    //======================
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.67, -73.94) // New York
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById("map");

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
    }
    if ($("#map").length > 0) {
        google.maps.event.addDomListener(window, "load", init);
    }
})(jQuery);
