/* global NODE_ENV DEBUG */
import('~/components/network-information');
import('~/components/sentry');
import('~/components/bootstrap');
import('~/components/svg-srite');
import('~/components/validator');

jQuery(($) => {
    console.log(`NODE_ENV=${NODE_ENV}; DEBUG=${DEBUG}; jQuery=${$.fn.jquery};`);

    const $html = $(document.documentElement);
    $html.addClass('ready-js');

    // Your code here
    $(window).on('scroll load resize', function fixedHeader() {
        const welcome = $('#home').innerHeight();
        const header = $('#header');
        let scrollOffset = 0;
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= (welcome - 200)) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });
    $('[data-scroll]').on('click', function scroll(event) {
        event.preventDefault();

        const $this = $(this);
        const blockId = $this.data('scroll');
        const blockOffset = $(blockId).offset().top - 100;

        $('#nav li').removeClass('active');
        $this.addClass('active');
        $('#nav').removeClass('active');

        $('html, body').animate({
            scrollTop: blockOffset,
        }, 500);
    });
});
