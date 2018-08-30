(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        /*---------------------------------------------*
        * Carousel
        ---------------------------------------------*/
        $('#Carousel').carousel({
                interval: 5000,
                item: 2
            })
            /*------------------------*/

    });

    /*---------------------------------------------*
        * STICKY scroll
    ---------------------------------------------*/

    $.localScroll();

    /**************************/


    jQuery(window).load(function () {


    });



}(jQuery));

jQuery('#myGroup').click( function(e) {
    jQuery('.collapse').collapse('hide');
});


