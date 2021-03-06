<!DOCTYPE html>
<html>
<head>
	<title><?php if(isset($title)) echo $title; ?></title>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
	<link rel="stylesheet" href="/css/main.css" type="text/css">
					
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	<!-- Controller Specific JS/CSS -->
	<?php if(isset($client_files_head)) echo $client_files_head; ?>
	
</head>

<body>
	<nav id='menu'>

		<ul>
			<li><a href='/'>Home</a></li>
            		<li><a href='/books'>Books</a></li>
			<li><a href='/styled'>Styled</a></li>
		</ul>
	</nav>
	
	<div>
		<?php if(isset($contentLeft)) echo $contentLeft; ?>
		<?php if(isset($contentRight)) echo $contentRight; ?>
		
		<?php if(isset($content)) echo $content; ?>
	</div>

	<script src='js/books.js'></script>
	<?php if(isset($client_files_body)) echo $client_files_body; ?>
</body>
</html>
