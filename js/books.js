$('#colors li').click ( function() {
	var colorValue = rgb2hex($(this).css('background-color'));
	$('#content').val( $('#content').val() + colorValue + ';\n' );
});

$('#border_style li').click ( function() {
        $('#content').val( $('#content').val() + $(this).attr('id') + ';\n' );
});

/* rgb2hex(rgb) function is borrowed from www.jquery4u.com */
function rgb2hex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

$('#color_attr, #border_attr, #html_tags').change ( function() {
	if($(this).val()==0) {
		$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
	} else {
		//var attrValue = $('option:selected', this).text() + ": ";
		//$('#content').val( $('#content').val() + attrValue );
		if( $(this).text() == $('#color_attr').text() ) {
			var attrValue = $('option:selected', this).text() + ": ";
                	$('#content').val( $('#content').val() + attrValue );
			$('#colors').show();
			$('#border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
		} else if( $(this).text() == $('#border_attr').text() ) {
			var attrValue = $('option:selected', this).text() + ": ";
                	$('#content').val( $('#content').val() + attrValue );
                        $('#border_style').show();
			$('#colors, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                } else if( $(this).text() == $('#html_tags').text() ) {
			switch( $('option:selected', this).text() ) {
			case 'Sections':
                        	$('#sections').show();
                        	$('#colors, #border_style, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
				break;
			case 'Grouping Content':
                                $('#groupings').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
			case 'Embedded Content':
                                $('#embeddings').show();
                                $('#colors, #border_style, #sections, #groupings, #tables, #forms, #hyperlinks').hide();
                                break;
			case 'Tabular Data':
                                $('#tables').show();
                                $('#colors, #border_style, #sections, #embeddings, #groupings, #forms, #hyperlinks').hide();
                                break;
			case 'Forms':
                                $('#forms').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #groupings, #hyperlinks').hide();
                                break;
			case 'Hyperlinks':
                                $('#hyperlinks').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #forms, #groupings').hide();
                                break;
			default:
                                $('#groupings, #sections, #embeddings, #tables, #forms, #hyperlinks').hide();
			}
                } /*else if( $(this).text() == $('#html_tags').text() ) {
                        $('#sections').show();
                        $('#colors, #border_style, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                }*/
	}
}).change();
