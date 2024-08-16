
<!-- section-footer -->
<footer class="footer">
    <div class="container">
        <div class="wrapper">
            <div class="footer__logo">
                <img src="<?= get_template_directory_uri() . '/assets/img/home/logo.svg'?>" alt="">
            </div>
            <div class="footer__icons">
                <p>
                    <?php _e('[:ru]
                              [:en]Сontact us 
                              [:]'); ?>
                </p>
                <a href="">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/tg.svg'?>" alt="">
                </a>
                <a href="">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/fsb.svg'?>" alt="">
                </a>
                <a href="">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/linkedin.svg'?>" alt="">
                </a>
                <a href="">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/skype.svg'?>" alt="">
                </a>
                <a href="">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/mail.svg'?>" alt="">
                </a>
            </div>
            <div class="footer__info">
                <div class="footer__info-location">
                    <img src="<?= get_template_directory_uri() . '/assets/img/footer/location.svg'?>" alt="">
                    <a>
                        <?php _e('[:ru]
                                  [:en]Melbourne Victoria, Australia
                                  Bourke Street Mall/Elizabeth St #3
                                  [:]'); ?>
                    </a>
                </div>
                <p>
                    <?php _e('[:ru]
                              [:en]© 2023, Osys.</br>
                              Privacy And Data Protection Policy
                              [:]'); ?>
                </p>
            </div>
        </div>
    </div>
</footer>

<? get_template_part( 'part-templates/part_scroller_top' )?>

<? get_template_part( 'part-templates/part_modal' )?>


</div>
<?php
wp_footer();
?>
</body>

</html>
