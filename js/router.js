define([
	'jquery',
	'underscore',
	'backbone',
	'view/pages',
	'tracking'
], function($, _, Backbone, PageView, Tracking){
	
	var AppRouter = Backbone.Router.extend({
		
		routes: {
			'*url'	: 'renderPage'
		},
		renderPage : function (url) {
			var page = new PageView(),
			target = (url) ? url : 'index';
            page.render(target);
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