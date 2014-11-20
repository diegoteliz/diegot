define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router){
	
	// General behaviors
	$('#menu-btn').click(function(event) {
		event.preventDefault();
		if ( $('#main-menu').height() >= 70 ) {
			$('#main-nav').toggleClass('opened');
		};
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