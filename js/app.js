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
	});
	$('.main-nav-item a').click(function(event) {
		$('#main-nav').removeClass('opened');
	});


	// Router initialization
	var initialize = function(){
		Router;
	}
	return { initialize: initialize };

});