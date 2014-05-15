require([
	'lib/jquery.backstretch'
], function(backstretch){

	//$('#work-item-2').backstretch(['/img/work/escuela-plus.jpg'],{centeredY:false});
	$('#work-item-1').backstretch(['/img/work/takeoff.jpg'],{centeredY:false});
	$('#work-item-1').css({backgroundColor:'#333333'});

	$('#work-item-2').backstretch('/img/work/pago-movil.jpg');
	$('#work-item-2').css({backgroundColor:'#333333'});

	$('#work-item-3').backstretch('/img/work/petersen.jpg');
	$('#work-item-3').css({backgroundColor:'#333333'});

	$('#work-item-4').backstretch(['/img/work/escuela-plus.jpg'],{centeredY:false});
	$('#work-item-4').css({backgroundColor:'#333333'});

	$('#work-item-5').backstretch('/img/work/punta-carretas-shopping.jpg');
	$('#work-item-5').css({backgroundColor:'#333333'});

});