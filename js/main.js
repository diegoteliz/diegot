require.config({
	paths	: {
		jquery 		: 'lib/jquery',
		underscore	: 'lib/underscore',
		backbone	: 'lib/backbone',
		easing		: 'lib/jquery.easing'
	}
});

require(['app'], function(App){
  App.initialize();
});

