require([], function(){

	function codeVerticalAlign(){
		$('#code').css({top: ($(window).height()/2) - ($('#code').height()/2) });
	}
	codeVerticalAlign();
	$(window).resize(function(event) {
		codeVerticalAlign();
	});

});