<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <?php wp_head(); ?>
</head>
<? _e('[:ru][:en][:]'); ?>

<body <?php body_class(); ?>>

    <?php wp_body_open(); ?>

    <!-- section-header -->
    <header id="header" class="header">
        <div class="container header__container">
            <div class="header__inner">
                <a href="<?= get_home_url(); ?>" class="header__logo">
                    <img src="<?= get_template_directory_uri() . '/assets/img/home/logo.svg' ?>" alt="header logo">
                </a>
                <? get_template_part('part-templates/part_menu'); ?>
                <div class="btn-lang">
                            <?php
                                if(has_nav_menu('languages-menu')) :
                                    wp_nav_menu([
                                        'theme_location' => 'languages-menu',
                                        'menu' => 'Languages Menu',
                                        'container' => 'div',
                                        'container_class' => 'language',
                                        'menu_class' => 'menu_lang',
                                        'fallback_cb' => 'wp_page_menu',
                                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                                        'depth' => 0,
                                    ]);
                                endif;
                            ?>
                            <div class="icon">
                                <img src="<?= get_template_directory_uri() . '/assets/img/home/lang-icon.svg'?>" alt="">
                            </div>
                </div>
                <div class="header__btns">
                    <a href="" class="btn-contact">
                        <span>
                            <? _e('[:ru][:en]Contact Sales[:]'); ?>
                        </span>
                    </a>
                    <a class="btn-common init-modal">
                        <? _e('[:ru]Запросить демо[:en]Request Demo[:]'); ?>
                    </a>
                </div>
                <div class="header__btns-mob d-md-none">
                    <a href="" aria-label="registration on platform" data-link="reg">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"
                            viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)" fill="#fff"
                                stroke="none">
                                <path
                                    d="M120 350c-50.625 -31.25 -59.375 -101.875 -17.5 -136.875 8.75 -7.5 6.875 -10.625 -13.75 -25.625 -25 -17.5 -41.875 -46.875 -48.75 -80.625 -3.75 -16.25 -2.5 -19.375 8.75 -19.375 9.375 0 13.125 5.625 16.25 21.875 5.625 28.75 36.25 63.125 64.375 72.5 26.875 8.75 63.125 4.375 85.625 -10l16.875 -11.25 -31.25 -31.875c-25.625 -26.25 -31.875 -36.875 -35.625 -62.5l-4.375 -30.625 30.625 4.375c28.75 4.375 35 8.75 101.25 75 73.75 74.375 80.625 86.875 57.5 110 -18.75 18.75 -35 15 -68.75 -16.25l-30.625 -28.75 -18.75 11.25 -18.75 11.25 15.625 18.125c18.75 21.875 23.75 41.875 18.75 69.375 -11.25 59.375 -77.5 90.625 -127.5 60zm73.125 -21.25c41.875 -21.875 40.625 -89.375 -2.5 -108.75 -31.875 -14.375 -66.875 -4.375 -81.875 24.375 -29.375 56.875 27.5 113.75 84.375 84.375zm141.875 -123.125c4.375 -8.125 -120.625 -136.875 -133.125 -136.875 -4.375 0 -8.125 3.75 -8.125 7.5 0 8.125 124.375 136.25 132.5 136.25 2.5 0 6.25 -3.125 8.75 -6.875z" />
                            </g>
                        </svg>
                    </a>
                    <a href="" aria-label="autoriztion on platform" data-link="log">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"
                            viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)" fill="#fff"
                                stroke="none">
                                <path
                                    d="M68.75 376.25l-65.625 -23.125 0 -153.125 0 -153.125 65.625 -23.125c36.25 -12.5 69.375 -23.125 73.75 -23.125 5.625 -0.625 7.5 43.125 7.5 199.375 0 156.25 -1.875 200 -7.5 199.375 -4.375 0 -37.5 -10.625 -73.75 -23.125zm53.125 -176.25c0 -11.25 -3.75 -16.25 -14.375 -17.5 -15 -2.5 -23.75 11.25 -17.5 27.5 1.875 5.625 9.375 8.75 17.5 7.5 10.625 -1.25 14.375 -6.25 14.375 -17.5z" />
                                <path
                                    d="M100 200c0 -3.125 3.125 -6.25 6.25 -6.25 3.75 0 6.25 3.125 6.25 6.25 0 3.75 -2.5 6.25 -6.25 6.25 -3.125 0 -6.25 -2.5 -6.25 -6.25z" />
                                <path
                                    d="M162.5 200l0 -162.5 75 0 75 0 0 65.625c0 39.375 -2.5 65.625 -6.25 65.625 -3.125 0 -6.25 -3.75 -6.25 -8.125 0 -11.25 -26.25 -35.625 -38.125 -35.625 -11.875 0 -74.375 63.125 -74.375 75.625 0 11.875 63.125 74.375 75.625 74.375 11.25 0 36.875 -25.625 36.875 -36.25 0 -4.375 3.125 -7.5 6.25 -7.5 3.75 0 6.25 26.25 6.25 65.625l0 65.625 -75 0 -75 0 0 -162.5z" />
                                <path
                                    d="M228.125 231.25l-31.25 -31.25 33.125 -32.5 32.5 -33.125 13.75 13.75c11.25 11.25 11.875 15 5 23.125 -6.875 8.75 -1.25 10 55.625 10l63.125 0 0 18.75 0 18.75 -63.125 0c-56.25 0 -62.5 1.25 -55.625 9.375 6.25 8.125 6.25 11.875 -3.125 21.875 -6.25 6.875 -13.125 12.5 -15 12.5 -2.5 0 -18.125 -14.375 -35 -31.25z" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </header>