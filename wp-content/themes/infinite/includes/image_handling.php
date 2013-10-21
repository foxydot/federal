<?php
/**
 * Grab first image in post for front page, resize to fit the area allowed on the front page.
 */
function infinite_first_image($post, $h = false, $w = false) {
  $first_img = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $first_img = $matches [1] [0];

  if(empty($first_img)){ //Defines a default image
    return FALSE;
  } else {
  	return $first_img;
  }
}

function infinite_get_image($post, $default = false, $h = false, $w = false) {
	$featured_image = $post->featured_image?$post->featured_image:get_the_post_thumbnail($post->ID);
	$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $featured_image, $matches);
	$image = $matches [1] [0];
	if(empty($image)){ //Defines a default image
	    $image = infinite_first_image($rp->post)?infinite_first_image($rp->post):get_bloginfo( 'stylesheet_directory' ).$default;
	  } 
	return $image;
}

add_filter( 'embed_defaults', 'infinite_new_embed_size' );

function infinite_new_embed_size()
{
	global $post;
	if(get_post_meta($post->ID,'_wp_page_template',true) != 'page-videowall.php'){
	// adjust these pixel values to your needs
	return array( 'width' => 470, 'height' => 300 );
	} else {
	return array( 'width' => 320, 'height' => 280 );
	}
}