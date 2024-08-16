<?php
/**
 * Template Name: Not found
 * Description: Page template 404 Not found.
 *
 */

get_header();

// $search_enabled = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.

?>

<section class="not-found">
    <div class="green-circle"></div>
    <div class="container">
        <div class="not-found__inner">
            <h1 class="content-heading not-found">
            <? _e('[:ru]
							<span class="rz-color">Страница</span> не&nbsp;найдена!
						[:en]
							<span class="rz-color">Page</span>  not&nbsp;found!
						[:]'); ?>
            </h1>
            <p class="notfound-small">
                <? _e('[:ru]
							Страница, которую вы ищете, не&nbsp;существует!
						[:en]
							The page you are looking for does not exist!
						[:]'); ?>
            </p>
            <a href="<?= get_home_url(); ?>" class="btn-common btn-go-home">
                <span>
                    <? _e('[:ru]ВЕРНУТЬСЯ НА ГЛАВНУЮ[:en]RETURN TO THE HOME PAGE[:]'); ?>
                </span>
            </a>
        </div>
    </div>
</section>

<style>
.header,
.footer {
    display: none;
}
</style>

<?php
get_footer();
