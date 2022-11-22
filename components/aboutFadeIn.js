export const aboutFadeIn = () => {
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.contact__item__box').each(function (i) {
                let bottomEl = $(this).offset().top + $(this).outerHeight();
                let bottomWin = $(window).scrollTop() + $(window).height();

                if (bottomWin > bottomEl) {
                    $(this).animate({ 'opacity': '1' }, 750);
                }
            });
        });
    });
}