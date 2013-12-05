<section id='controls'>
	<select name='html_elements' id='html_tags'>
		<option value='0' selected>Choose HTML tags</option>
		<option value='1'>Sections</option>
		<option value='2'>Grouping Content</option>
		<option value='3'>Embedded Content</option>
		<option value='4'>Tabular Data</option>
		<option value='5'>Forms</option>
		<option value='6'>Hyperlinks</option>
	<select>
	<ul id='sections'>
		<li><a href='#'>body</a></li>
		<li><a href='#'>div</a></li>
		<li><a href='#'>section</a></li>
		<li><a href='#'>nav</a></li>
		<li><a href='#'>article</a></li>
		<li><a href='#'>aside</a></li>
		<li><a href='#'>header</a></li>
		<li><a href='#'>footer</a></li>
		<li><a href='#'>h1</a></li>
		<li><a href='#'>h2</a></li>
		<li><a href='#'>h3</a></li>
		<li><a href='#'>h4</a></li>
		<li><a href='#'>h5</a></li>
		<li><a href='#'>h6</a></li>
	</ul>

	<ul id='groupings'>
		<li><a href='#'>div</a></li>
		<li><a href='#'>p</a></li>
		<li><a href='#'>hr</a></li>
		<li><a href='#'>ol</a></li>
		<li><a href='#'>ul</a></li>
		<li><a href='#'>li</a></li>
		<li><a href='#'>figure</a></li>
        </ul>

	<ul id='embeddings'>
		<li><a href='#'>img</a></li>
		<li><a href='#'>iframe</a></li>
		<li><a href='#'>embed</a></li>
		<li><a href='#'>video</a></li>
		<li><a href='#'>audio</a></li>
		<li><a href='#'>canvas</a></li>
        </ul>

	<ul id='tables'>
		<li><a href='#'>table</a></li>
		<li><a href='#'>caption</a></li>
		<li><a href='#'>coldroup</a></li>
		<li><a href='#'>col</a></li>
		<li><a href='#'>tbody</a></li>
		<li><a href='#'>thead</a></li>
		<li><a href='#'>tfoot</a></li>
		<li><a href='#'>tr</a></li>
		<li><a href='#'>td</a></li>
		<li><a href='#'>th</a></li>
        </ul>
	
	<ul id='forms'>
		<li><a href='#'>form</a></li>
		<li><a href='#'>fieldset</a></li>
		<li><a href='#'>label</a></li>
		<li><a href='#'>input</a></li>
		<li><a href='#'>button</a></li>
		<li><a href='#'>select</a></li>
		<li><a href='#'>datalist</a></li>
		<li><a href='#'>optgroup</a></li>
		<li><a href='#'>option</a></li>
		<li><a href='#'>textarea</a></li>
        </ul>

	<ul id='hyperlinks'>
                <li><a href='#'>a</a></li>
		<li><a href='#'>a:link</a></li>
                <li><a href='#'>a:active</a></li>
                <li><a href='#'>a:hover</a></li>
                <li><a href='#'>a:visited</a></li>
        </ul>

	<select name='colors' id='color_attr'>
		<option value='0' selected>Choose Color Attributes</option>
		<option value='1'>color</option>
		<option value='2'>background-color</option>
		<option value='3'>border-color</option>
	</select>
	<ul id='colors'>
		<li id='white'></li>
		<li id='silver'></li>
		<li id='gray'></li>
		<li id='black'></li>
		<li id='red'></li>
		<li id='maroon'></li>
		<li id='yellow'></li>
		<li id='olive'></li>
		<li id='lime'></li>
		<li id='green'></li>
		<li id='aqua'></li>
		<li id='teal'></li>
		<li id='blue'></li>
		<li id='navy'></li>
		<li id='fuchsia'></li>
		<li id='purple'></li>
	</ul>
	
	<select name='borders' id='border_attr'>
                <option value='0' selected>Choose Border Attributes</option>
                <option value='1'>border-style</option>
                <option value='2'>border-top-style</option>
		<option value='3'>border-right-style</option>
                <option value='4'>border-bottom-style</option>
		<option value='5'>border-left-style</option>
        </select>
	<ul id='border_style'>
		<li id='none'>none</li>
		<li id='dotted'>dotted</li>
		<li id='dashed'>dashed</li>
		<li id='solid'>solid</li>
		<li id='double'>double</li>
		<li id='groove'>groove</li>
		<li id='ridge'>ridge</li>
		<li id='inset'>inset</li>
		<li id='outset'>outset</li>
	</ul>

	<select name='fonts' id='font_attr'>
                <option value='0' selected>Choose Font Attributes</option>
                <option value='1'>font-family</option>
                <option value='2'>font-size</option>
                <option value='3'>font-weight</option>
                <option value='4'>font-style</option>
        </select>
        <ul id='font_family'>
                <li id='serif'><a href='#'>Times, Times New Roman, Georgia, serif</a></li>
                <li id='sans-serif'><a href='#'>Verdana, Geneva, Arial, sans-serif</a></li>
                <li id='monospace'><a href='#'>Courier, Courier New, monospace</a></li>
                <li id='cursive'><a href='#'>Comic Sans, Apple Chancery, cursive</a></li>
                <li id='fantasy'><a href='#'>Last Ninja, Impact, fantasy</a></li>
        </ul>

	<ul id='font_size'>
                <li id='x-small'><a href='#'>x-small</a></li>
                <li id='small'><a href='#'>small</a></li>
                <li id='medium'><a href='#'>medium</a></li>
                <li id='large'><a href='#'>large</a></li>
                <li id='x-large'><a href='#'>x-large</a></li>
        </ul>

	<ul id='font_weight'>
                <li id='normal'><a href='#'>normal</a></li>
                <li id='bold'><a href='#'>bold</a></li>
                <li id='bolder'><a href='#'>bolder</a></li>
                <li id='lighter'><a href='#'>lighter</a></li>
        </ul>

	<ul id='font_style'>
                <li id='italic'><a href='#'>italic</a></li>
                <li id='oblique'><a href='#'>oblique</a></li>
        </ul>

	<select name='margins_pads' id='margins_pads_attr'>
		<option value='0' selected>Margins and Paddings</option>
                <option value='1'>margin</option>
                <option value='2'>margin-top</option>
                <option value='3'>margin-bottom</option>
                <option value='4'>margin-left</option>
		<option value='5'>margin-right</option>
		<option value='6'>padding</option>
		<option value='7'>padding-top</option>
		<option value='8'>padding-bottom</option>
		<option value='9'>padding-right</option>
		<option value='10'>padding-left</option>
	</select>

	<select name='lists' id='list_attr'>
                <option value='0' selected>Choose List Attributes</option>
                <option value='1'>list-style-type</option>
                <option value='2'>list-style-position</option>
        </select>

	<ul id='list_type'>
                <li id='none1'><a href='#'>none</a></li>
                <li id='disc'><a href='#'>disc</a></li>
                <li id='circle'><a href='#'>circle</a></li>
                <li id='square'><a href='#'>square</a></li>
		<li id='decimal'><a href='#'>decimal</a></li>
                <li id='lower-roman'><a href='#'>lower-roman</a></li>
                <li id='upper-roman'><a href='#'>upper-roman</a></li>
                <li id='lower-latin'><a href='#'>lower-latin</a></li>
		<li id='upper-latin'><a href='#'>upper-latin</a></li>
        </ul>
	
	<ul id='list_position'>
                <li id='inside'><a href='#'>inside</a></li>
                <li id='outside'><a href='#'>outside</a></li>
        </ul>

	<select name='float' id='float_attr'>
		<option value='0' selected>Float and Clear</option>
                <option value='1'>float</option>
                <option value='2'>clear</option>
	</select>

	<ul id='float_clear'>
                <li id='left'><a href='#'>left</a></li>
                <li id='right'><a href='#'>right</a></li>
                <li id='both'><a href='#'>both</a></li>
                <li id='none2'><a href='#'>none</a></li>
        </ul>

	<article>
	<ul>
		<li>The idea of this project is to generate a css for the page shown in the <a href='/books'>Books</a> 
		    navigation menu.</li>
		<li>Enter your css in the textarea and hit submit. Your css will automatically be applied to 
		    the <a href='/books'>Books</a> page.</li>
		<li>The <a href='/books'>Books</a> page was taken from one of my assignments in cscie-12 and I styled it as shown in 
		    the <a href='/styled'>Styled</a> navigation menu at the time.</li>
		<li>You might have to add opening &#39;&#123;&#39; and closing &#39;&#125;&#39; braces using the keyboard. 
		    Also you have to type in any classes and ids.</li>
		<li>If you change the value of an attribute, you have to manually delete the older value in the textarea. 
		    I will try to fix that but ...</li>
	</ul>
	<article>
</section>
