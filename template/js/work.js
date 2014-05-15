require([
	'lib/jquery.backstretch'
], function(backstretch){

	$('#work-item-1 a figure.work-img').backstretch(['/img/work/takeoff.jpg'],{centeredY:false});
	$('#work-item-1').css({backgroundColor:'#333333'});

	$('#work-item-2 a figure.work-img').backstretch('/img/work/petersen.jpg');
	$('#work-item-2').css({backgroundColor:'#333333'});

	$('#work-item-3 a figure.work-img').backstretch(['/img/work/punta-carretas-shopping.jpg'],{centeredY:false});
	$('#work-item-3').css({backgroundColor:'#333333'});

	$('#work-item-4 a figure.work-img').backstretch(['/img/work/escuela-plus.jpg'],{centeredY:false});
	$('#work-item-4').css({backgroundColor:'#333333'});

	$('#work-item-5 a figure.work-img').backstretch('/img/work/lactld.jpg');
	$('#work-item-5').css({backgroundColor:'#333333'});

});