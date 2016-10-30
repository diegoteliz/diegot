define([
	'jquery',
	'underscore',
	'backbone',
	'view/pages',
	'tracking'
], function($, _, Backbone, PageView, Tracking){
	
	var AppRouter = Backbone.Router.extend({
		
		routes: {
			// External redirections
			'footy'		: 'footyRedirect',
			'footy/'	: 'footyRedirect',

			// Website routes
			'*url'		: 'renderPage'
		},
		renderPage : function (url) {
			var page = new PageView(),
			target = (url) ? url : 'index';
            page.render(target);
		},
		footyRedirect : function(url) {
			window.location.href = "https://goo.gl/photos/mxgWeWmBRtkELN7t7";
		}
	});

	//Initialize the Router
	var Router = new AppRouter();

	// Navigation
	$('a').not('.static').click(function(event) {
		event.preventDefault();
		Router.navigate( $(this).attr('href') , {trigger: true} );
	});

	// Activate Backbone history
	Backbone.history.start({pushState: true});

	return Router;

});