const navLower = document.querySelector('.navLower');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const navLowerTransparent = document.querySelector('.navLowerTransparent');
let oldYPosition = 0;
let hideTimeout = null;
// Grab buttons for animation
const buttons = document.querySelectorAll(".heroLeftBtn");
const strength = 60;
const navContent = document.querySelector('.navContent');
const size6 = document.querySelector('.size-6');
const navLowerFullScreen = document.querySelector('.navLowerFullScreen');
const navLowerFullScreenBtns = document.querySelectorAll('.navLowerFullScreenBtn');
const combinar = document.querySelector('.combinar');
const closeBtn = document.getElementById("closeMenu");