require([], function(){

    var winHeight = $(window).height(),
    winWidth = $(window).width(),

    isMobile = function() {
        return (winWidth < 1024) ? true : false;
    };

    if (isMobile() && ($('#dinamic-content section').attr('id') != 'about')) {
        $('#dinamic-content').css({height: winHeight - 70});
    }

	function codeVerticalAlign(){
		$('#code').css({top: (winHeight/2) - ($('#code').height()/2) - 30});
	}
	codeVerticalAlign();
	$(window).resize(function(event) {
        var winHeight = $(window).height(),
        winWidth = $(window).width();
		codeVerticalAlign();
	});

});