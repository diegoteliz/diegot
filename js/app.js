define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router){

    var winHeight = $(window).height(),
    winWidth = $(window).width(),

    isMobile = function() {
        return (winWidth < 1024) ? true : false;
    };
	
	// General behaviors
	$('#menu-btn').click(function(event) {
		event.preventDefault();
		if ( $('#main-menu').height() >= 70 ) {
			$('#main-nav').toggleClass('opened');
		};
        if (isMobile()) {
            var navItemHeight = (winHeight -70) / 3;
            $('.main-nav-item a').css({lineHeight: navItemHeight+'px'});
        }
		$('#options-wrapper').removeClass('opened');
	});
	$('.main-nav-item a').click(function(event) {
		$('#main-nav').removeClass('opened');
	});

	$('#options-btn').click(function(event) {
        event.preventDefault();
        $('#main-nav').removeClass('opened');
        $('#options-wrapper').toggleClass('opened');
    });
    $('#options li a').click(function(event) {
        $('#options-wrapper').removeClass('opened');
    });

	// Router initialization
	var initialize = function(){
		Router;
	}
	return { initialize: initialize };

});