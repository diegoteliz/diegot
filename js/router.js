var Router = Backbone.Router.extend({
	routes: {
		''			: App.Controller.Home,
		'about'		: App.Controller.About,
		'contact'	: App.Controller.Contact,
		'work'		: App.Controller.Work,
		'work/:name': App.Controller.SingleWork
	}
});

App.Router = new Router();

Backbone.history.start({
    hashChange: false,
    pushState: true
});