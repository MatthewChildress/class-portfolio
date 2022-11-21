const scrollBtn = document.getElementById('scrollBtn');

// shows scroll button
export const showScrollButton = () => {
    // shows scroll button after scrolling. Currently always active from navbar
    (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';
}

// brings back to top of page
export const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}