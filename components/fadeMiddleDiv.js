export default function fadeMiddleDiv() {
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.project__two').each(function (i) {
                // checks distance from top of window to bottom of div
                let bottomEl = $(this).offset().top + $(this).outerHeight();
                // checks scroll distance for scroll bar
                let bottomWin = $(window).scrollTop() + $(window).height();
                // if scroll distance > bottom of div distance -- chance CSS
                if (bottomWin > bottomEl) {
                    $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 500);
                }
            });
        });
    });
}