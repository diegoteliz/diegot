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
					url: '/template/'+url+'.html'
				})
				.done(function(data) {
					//$(document).attr('title', 'TakeOff Media | ' + title)
					
					el.html(data);

					/*if (page != 'home') {
						$('.menu ul li a[href*=' + page + ']').addClass('active');
					}*/
					el.show();
					preloader.fadeOut(200);

				})
				.fail(function() {

					var preloader	= $('#preloader');
					var el			= $('#dinamic-content');

					preloader.fadeIn(200);
					el.fadeOut(600, function() {
						$.ajax({
							url: '/template/404.html'
						})
						.done(function(data) {
							$(document).attr('title', 'Oops! | Diego Téliz')
							
							el.html(data);

						})
						.fail(function() {
							alert('an error occurred');
						})
					});
				})
			});
		}

	});

	return PageView;
	
});