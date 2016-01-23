require.config({
    urlArgs : "bust=v1.1",
	paths	: {
		jquery 		: 'lib/jquery',
		underscore	: 'lib/underscore',
		backbone	: 'lib/backbone',
		easing		: 'lib/jquery.easing',
		tracking	: 'lib/tracking'
	}
});

require(['app'], function(App){
  App.initialize();
});