define([
	'jquery',
	'underscore',
	'backbone',
	'router',
], function($, _, Backbone, Router){
	
	// General behaviors
	$('#menu-btn').click(function(event) {
		event.preventDefault();
		//alert('hey');
	});

	// Router initialization
	var initialize = function(){
		Router;
	}
	return { initialize: initialize };



});