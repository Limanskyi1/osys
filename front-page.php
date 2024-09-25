<?
/* Template Name: Home Page
Template Post Type: post, page, cinema
*/

get_header();

?>

<?php _e('[:ru][:en][:]'); ?>

<main class="content">
    <? get_template_part('part-templates/sections/hero'); ?>
    <? get_template_part('part-templates/sections/presentaition'); ?>
    <? get_template_part('part-templates/sections/crm-intro'); ?>
    <? get_template_part('part-templates/sections/crm'); ?>
    <? get_template_part('part-templates/sections/integrations'); ?>
    <? get_template_part('part-templates/sections/platform-intro'); ?>
    <? get_template_part('part-templates/sections/assets'); ?>
    <? get_template_part('part-templates/sections/toolkit'); ?>
    <? get_template_part('part-templates/sections/mobile'); ?>
    <? get_template_part('part-templates/sections/clients'); ?>
    <? get_template_part('part-templates/sections/services-intro'); ?>
    <? get_template_part('part-templates/sections/services'); ?>
    <? get_template_part('part-templates/sections/startup'); ?>
    <? get_template_part('part-templates/sections/cta'); ?>
</main>


<? get_footer(); ?>