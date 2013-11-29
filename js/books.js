$('#colors li').click ( function() {
	var colorValue = rgb2hex($(this).css('background-color'));
	$('#content').val( $('#content').val() + colorValue + ';\n' );
});

/* rgb2hex(rgb) function is borrowed from www.jquery4u.com */
function rgb2hex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

$('#color_attr').change ( function() {
	if($('#color_attr').val()==0) {
		$('#colors').hide();
	} else {
		var attrValue = $('#color_attr option:selected').text() + ": ";
		$('#content').val( $('#content').val() + attrValue );
		$('#colors').show();
	}
}).change();
