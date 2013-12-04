<?php
class styled_controller extends base_controller {

        /*-------------------------------------------------------------------------------------------------

        -------------------------------------------------------------------------------------------------*/
        public function __construct() {
                parent::__construct();
        }

        /*-------------------------------------------------------------------------------------------------
        Accessed via http://localhost/index/index/
        -------------------------------------------------------------------------------------------------*/
        public function index() {

                # Any method that loads a view will commonly start with this
                # First, set the content of the template with a view file
                        $this->template->content = View::instance('v_books_index');

                # Now set the <title> tag
                        $this->template->title = "Web Development Books";

                # CSS/JS includes

                $client_files_head = Array('/css/books.css');
                $this->template->client_files_head = Utils::load_client_files($client_files_head);
                /*
                $client_files_body = Array("");
                $this->template->client_files_body = Utils::load_client_files($client_files_body);   
                */

                # Render the view
                        echo $this->template;

        } # End of method

} # End of class

