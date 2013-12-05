$('#colors li').click ( function() {
	var colorValue = rgb2hex($(this).css('background-color'));
	$('#content').val( $('#content').val() + '\t' + colorValue + ';\n' );
	//$('#content').css( 'background-color', colorValue );
});

$('#border_style li').click ( function() {
        $('#content').val( $('#content').val() + ' ' + $(this).attr('id') + ';\n' );
});

/* rgb2hex(rgb) function is borrowed from www.jquery4u.com */
function rgb2hex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}

$('#sections li, #groupings li, #embeddings li, #tables li, #forms li, #hyperlinks li').click( function() {
	$('#content').val( $('#content').val() + $(this).text() + ' {\n');
});

$('#font_family li,#font_size li,#font_style li,#font_weight li,#list_type li,#list_position li,#float_clear li').click ( function() {
        $('#content').val( $('#content').val() + ' ' + $(this).text() + ';\n' );
});

$('#color_attr, #border_attr, #html_tags, #font_attr, #margins_pads_attr, #list_attr, #float_attr').change ( function() {
	if($(this).val()==0) {
		$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
		$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position, #float_clear').hide();
	} else {
		//var attrValue = $('option:selected', this).text() + ": ";
		//$('#content').val( $('#content').val() + attrValue );
		if( $(this).text() == $('#color_attr').text() ) {
			var attrValue = $('option:selected', this).text() + ": ";
                	$('#content').val( $('#content').val() + '\t' + attrValue );
			$('#colors').show();
			$('#border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
			$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position, #float_clear').hide();
		} else if( $(this).text() == $('#border_attr').text() ) {
			var attrValue = $('option:selected', this).text() + ": ";
                	$('#content').val( $('#content').val() + '\t' + attrValue );
                        $('#border_style').show();
			$('#colors, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks, #float_clear').hide();
			$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
                } else if( $(this).text() == $('#html_tags').text() ) {
			switch( $('option:selected', this).text() ) {
			case 'Sections':
                        	$('#sections').show();
                        	$('#colors,#border_style,#groupings,#embeddings,#tables,#forms,#hyperlinks,#float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
				break;
			case 'Grouping Content':
                                $('#groupings').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #forms,#hyperlinks,#float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
                                break;
			case 'Embedded Content':
                                $('#embeddings').show();
                                $('#colors, #border_style, #sections, #groupings, #tables, #forms, #hyperlinks, #float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
                                break;
			case 'Tabular Data':
                                $('#tables').show();
                                $('#colors,#border_style,#sections,#embeddings,#groupings,#forms,#hyperlinks,#float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
                                break;
			case 'Forms':
                                $('#forms').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #groupings, #hyperlinks').hide();
				$('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position, #float_clear').hide();
                                break;
			case 'Hyperlinks':
                                $('#hyperlinks').show();
                                $('#colors, #border_style, #sections, #embeddings, #tables, #forms, #groupings, #float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
                                break;
			default:
                                $('#groupings, #sections, #embeddings, #tables, #forms, #hyperlinks, #float_clear').hide();
				$('#font_family, #font_size, #font_style, #font_weight, #list_type, #list_position').hide();
			}
                }  else if( $(this).text() == $('#font_attr').text() ) {
			switch( $('option:selected', this).val() ) {
                        case '0':
				$('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position,#float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '1':
				var attrValue = $('option:selected', this).text() + ": ";
                        	$('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#font_family').show();
				$('#font_size, #font_style, #font_weight, #list_type, #list_position, #float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '2':
				var attrValue = $('option:selected', this).text() + ": ";
	                        $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#font_size').show();
				$('#font_family, #font_style, #font_weight, #list_type, #list_position, #float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '3':
				var attrValue = $('option:selected', this).text() + ": ";
	                        $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#font_weight').show();
				$('#font_family, #font_size, #font_style, #list_type, #list_position, #float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '4':
				var attrValue = $('option:selected', this).text() + ": ";
	                        $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#font_style').show();
				$('#font_family, #font_size, #font_weight, #list_type, #list_position, #float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        default:
				$('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position,#float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                        }

		} else if( $(this).text() == $('#margins_pads_attr').text() ) {
			var attrValue = $('option:selected', this).text() + ": ";
                        $('#content').val( $('#content').val() + '\t' + attrValue );
		} else if( $(this).text() == $('#list_attr').text() ) {
                        switch( $('option:selected', this).val() ) {
                        case '0':
                                $('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position, #float_clear').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '1':
                                var attrValue = $('option:selected', this).text() + ": ";
                                $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#list_type').show();
                                $('#font_family, #font_size, #font_style, #font_weight, #list_position, #float_clear').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '2':
                                var attrValue = $('option:selected', this).text() + ": ";
                                $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#list_position').show();
                                $('#font_family, #font_size, #font_style, #font_weight, #list_type, #float_clear').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        default:
                                $('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position,#float_clear').hide();
				$('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
			}
		} else if( $(this).text() == $('#float_attr').text() ) {
                        switch( $('option:selected', this).val() ) {
                        case '0':
                                $('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position,#float_clear').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        case '1':
			case '2':
                                var attrValue = $('option:selected', this).text() + ": ";
                                $('#content').val( $('#content').val() + '\t' + attrValue );
                                $('#float_clear').show();
                                $('#font_family, #font_size, #font_style, #font_weight, #list_position, #list_type').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                                break;
                        default:
                                $('#font_family,#font_size,#font_style,#font_weight,#list_type,#list_position,#float_clear').hide();
                                $('#colors, #border_style, #sections, #groupings, #embeddings, #tables, #forms, #hyperlinks').hide();
                        }
                }
	}
}).change();
