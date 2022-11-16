const scrollBtn = document.getElementById('scrollBtn');

export const showScrollButton = () => {
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';

}

export const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}