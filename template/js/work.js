require([
	'lib/jquery.backstretch'
], function(backstretch){

    var winHeight = $(window).height(),
    winWidth = $(window).width(),

    isMobile = function() {
        return (winWidth < 1024) ? true : false;
    };

    if (isMobile() && ($('#dinamic-content section').attr('id') != 'about')) {
        $('#dinamic-content').css({height: winHeight - 70})
    }

	$('#work-item-1 a figure .work-img').backstretch(['/img/work/takeoff.jpg'],{centeredY:false});
	$('#work-item-2 a figure .work-img').backstretch('/img/work/petersen.jpg');
	$('#work-item-3 a figure .work-img').backstretch(['/img/work/punta-carretas-shopping.jpg'],{centeredY:false});
	$('#work-item-4 a figure .work-img').backstretch(['/img/work/escuela-plus.jpg'],{centeredY:false});
	$('#work-item-5 a figure .work-img').backstretch('/img/work/lactld.jpg');

});