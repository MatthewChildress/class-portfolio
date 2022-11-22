// main.js's purpose is to import and call functions to keep the javascript modularized and tidy
import { openSkills } from "./components/accordian.js";
import { darkMode } from "./components/darkMode.js"
import { scrollToTop, showScrollButton } from './components/scrollToTop.js'
import { navSticky } from "./components/navSticky.js"
import divFromLeft from './components/divFromLeft.js'
import fadeMiddleDiv from './components/fadeMiddleDiv.js'
import { contactFadeIn } from './components/contactFadeIn.js'
import { aboutFadeIn } from './components/aboutFadeIn.js'

document.getElementById('scrollBtn').addEventListener('click', scrollToTop);



window.onscroll = showScrollButton();
window.onscroll = navSticky();
/* window.addEventListener('scroll', navSticky); */

openSkills();
darkMode();

// jQuery functions
divFromLeft();
fadeMiddleDiv();
contactFadeIn();
aboutFadeIn();