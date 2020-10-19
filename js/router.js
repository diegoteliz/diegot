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
			// ALSO CONFIGURED ON .htaccess
			// window.location.href = "https://goo.gl/photos/mxgWeWmBRtkELN7t7"; // OLD URL
			window.location.href = "https://www.youtube.com/playlist?list=PLXa4ugQRENTrK6u2hXQ-xbeo9uMn5OMqE";
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
