<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the wordpress construct of pages
 * and that other 'pages' on your wordpress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage infinite
 * @since infinite 3.1
 */

get_header(); 
//this is the homepage, so we aren't looping here.
//insert slideshow
?>

<?php get_sidebar('breadcrumbs'); ?>
<div class="landing-header-area">
    <?php if(get_option('infinite_landing_link')!=""){ ?>
    <a href="<?php echo get_option('infinite_landing_link'); ?>" class="landing-link"></a>
    <?php }?>
    <?php get_sidebar('logo'); ?>
    <?php get_sidebar('nav'); ?>
</div>
<div id="container" class="content">
    <div id="content" role="main">
        <?php //three footer widgets ?>
        <?php if ( is_active_sidebar( 'homepage-footer-widget-area' ) ) : ?>
                <div id="landing-footer" class="widget-area">
                    <ul>
                        <?php dynamic_sidebar( 'homepage-footer-widget-area' ); ?>
                    </ul>
        <div class="clear"></div>
                </div><!-- #fourth .widget-area -->
<?php endif; ?>
        <div class="clear"></div>
    </div>
</div>

		<?php get_footer(); ?>
