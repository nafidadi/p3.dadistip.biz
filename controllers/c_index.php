<?php

class index_controller extends base_controller {
	
	/*-------------------------------------------------------------------------------------------------

	-------------------------------------------------------------------------------------------------*/
	public function __construct() {
		parent::__construct();
	} 
		
	/*-------------------------------------------------------------------------------------------------
	Accessed via http://localhost/index/index/
	-------------------------------------------------------------------------------------------------*/
	public function index() {

		$filename = "css/web_dev.css";
		file_put_contents($filename, $_POST);
		
		# Any method that loads a view will commonly start with this
		# First, set the content of the template with a view file
			$this->template->contentLeft = View::instance('v_styles');
			$this->template->contentRight = View::instance('v_index_index');
			
			# $this->template->contentTop = View::instance('v_index_index');
			# $this->template->contentBottom = View::instance('v_books_small');
			
		# Now set the <title> tag
			$this->template->title = "Simple CSS Generator";
	
		# CSS/JS includes
		
		$client_files_head = Array(
				'/css/styles.css'
			);
	    	$this->template->client_files_head = Utils::load_client_files($client_files_head);
	    	/*
	    	$client_files_body = Array("");
	    	$this->template->client_files_body = Utils::load_client_files($client_files_body);   
	    	*/
	      					     		
		# Render the view
			echo $this->template;

	} # End of method

	/*public function addCSS() {
		$filename = "/web_dev.css";
		file_put_contents($filename, $_POST);
	}*/
	
	
} # End of class
