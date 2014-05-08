define([
	'jquery',
	'underscore',
	'backbone' ,
	'view/pages'
], function($, _, Backbone, PageView){
	
	var AppRouter = Backbone.Router.extend({
		
		routes: {
			'*url'	: 'renderPage'
		},
		renderPage : function (url) {
			
			if(url){

				var page = new PageView();
				page.render(url);

			} else{

				var page = new PageView();
				page.render('index');

			};
		}
	});

	//Initialize the Router
	var Router = new AppRouter;

	// Activate Backbone history
	Backbone.history.start({pushState: true});

	return Router;

});