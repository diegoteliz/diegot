//var temp = 
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var PageView = Backbone.View.extend({

		el: $('#dinamic-content'),
		render: function(url){
			/*if (url) {
				// render page
			} else{
				// show 404
			};*/
			alert(url);
			/*var data = {};
			var compiledTemplate = _.template( HomeTemplate, data );
			this.$el.html( compiledTemplate );*/
		}

	});

	return PageView;
	
});