function openNav() {
  navLowerFullScreen.style.display = 'block';
  setTimeout(() => {
    navLowerFullScreen.style.opacity = "1";
    navLowerFullScreen.style.transform = "scale(1)";
  }, 300);
  // navLowerFullScreen.style.opacity = "1";
  // navLowerFullScreen.style.transform = "scale(1)";
  // navLowerFullScreen.style.display = 'block';
}


function closeNav() {
  // navLowerFullScreen.style.animation = 'slideRight 0.5s ease forwards';
  navLowerFullScreen.style.opacity = "0";
  navLowerFullScreen.style.transform = "scale(0.98)";
  setTimeout(() => {
    navLowerFullScreen.style.display = 'none';
  }, 300);
}


size6.addEventListener('click', openNav);

navLowerFullScreenBtns.forEach(btn => {
  btn.addEventListener('click', closeNav);
});


closeBtn.addEventListener("click", closeNav);
combinar.addEventListener("click", closeNav);
navLowerFullScreen.addEventListener("click", closeNav);


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});