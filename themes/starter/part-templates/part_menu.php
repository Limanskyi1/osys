<div class="header__menu" style="display:none;">
    <div class="container">
        <?php
            if(has_nav_menu('header-menu')) :
                wp_nav_menu([
                    'theme_location' => 'header-menu',
                    'menu' => 'Header Menu',
                    'container' => 'nav',
                    'container_class' => 'top_header',
                    'menu_class' => 'top_header_link',
                    'fallback_cb' => 'wp_page_menu',
                    'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth' => 0,
                ]);
            endif;    
        ?>
    </div>
    <span class="menu-closer">
        &times;
    </span>
</div>