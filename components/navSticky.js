export const navSticky = () => {
    const navBar = document.getElementById('navBar');
    const stick = navBar.offsetTop;
    // if window scroll distance is more than navbar offset then the navbar is stickied
    window.pageYOffset >= stick ? navBar.classList.add('sticky') : navBar.classList.remove('sticky');
}