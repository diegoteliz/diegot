require([], function(){

	function infoVerticalAlign(){
		$('#contact').css({top: ($(window).height()/2) - ($('#contact').height()/2) - 30 });
	}
	infoVerticalAlign();
	$(window).resize(function(event) {
		infoVerticalAlign();
	});

});