export const contactFadeIn = () => {
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.about__info').each(function (i) {
                let bottomEl = $(this).offset().top + $(this).outerHeight();
                let bottomWin = $(window).scrollTop() + $(window).height();

                if (bottomWin > bottomEl) {
                    $(this).animate({ 'opacity': '1' }, 400);
                }
            });
        });
    });
}