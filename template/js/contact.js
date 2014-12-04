require([], function(){

    var winHeight = $(window).height(),
    winWidth = $(window).width(),

    isMobile = function() {
        return (winWidth < 1024) ? true : false;
    },

    infoVerticalAlign = function() {
        $('#contact').css({top: (winHeight/2) - ($('#contact').height()/2) - 70 });
    };

    if (isMobile() && ($('#dinamic-content section').attr('id') != 'about')) {
        $('#dinamic-content').css({height: winHeight - 70});
    }

	infoVerticalAlign();
	$(window).resize(function(event) {
        winHeight = $(window).height();
        winWidth = $(window).width();
		infoVerticalAlign();
	});

});