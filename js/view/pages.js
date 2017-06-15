//var temp = 
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var PageView = Backbone.View.extend({

		el: $('#dinamic-content'),
		render: function(url){
			
			var preloader	= $('#preloader');
			var el 			= $('#dinamic-content');

			preloader.fadeIn(100);
			el.fadeOut(200, function() {
				$.ajax({
					url: '/template/'+url+'.php',
					async: true
				})
				.done(function(data) {
							
					el.html(data);
					el.show();
					preloader.fadeOut(200);

				})
				.fail(function() {

					var preloader	= $('#preloader');
					var el			= $('#dinamic-content');

					preloader.fadeIn(200);
					el.fadeOut(600, function() {
						$.ajax({
							url: '/template/404.php',
							async: true
						})
						.done(function(data) {
							$(document).attr('title', 'Oops! | Diego Teliz');
							el.html(data);
						})
						.fail(function() {
							alert('an error occurred');
						});
					});
				});
			});
		}

	});

	return PageView;
	
});