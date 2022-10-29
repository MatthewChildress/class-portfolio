// main.js true purpose is to import and call functions to keep the javascript modularized and tidy
import { openSkills } from "./components/accordian.js";
import { darkMode } from "./components/darkMode.js"
import { scrollToTop, showScrollButton } from './components/scrollToTop.js'

const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', scrollToTop);

window.onscroll = showScrollButton();

openSkills();
darkMode();