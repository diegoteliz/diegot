define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'tracking'
], function($, _, Backbone, Router, Tracking){
	
	// General behaviors
	$('#menu-btn').click(function(event) {
		event.preventDefault();
	});

	// Router initialization
	var initialize = function(){
		Router;
	}
	return { initialize: initialize };



});