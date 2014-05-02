require.config({
	baseUrl	: 'js/lib',
	paths	: {
		jquery 		: 'jquery',
		underscore	: 'underscore',
		backbone	: 'backbone',
		easing		: 'jquery.easing'
	}
});

require(['jquery'], function( $ ) {
	console.log( '$' ) // OK
});