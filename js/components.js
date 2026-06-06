window.addEventListener("scroll", () => {
    let newYPosition = window.scrollY;
    if (newYPosition > oldYPosition) {
        // Scroll down
        nav.style.top = "-7vh"; // Hide navbar
    } else {
        // Scroll up
        nav.style.top = "0"; // Show navbar
    }
    oldYPosition = newYPosition;
});








function showNavLower() {
    navLower.style.bottom = "0vh";
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = null; // Clear the timeout reference
}

function hideNavLowerWithDelay(x = 500) {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        navLower.style.bottom = "-8vh";
        navLower.style.opacity = "0.6";
        navLower.style.transition = "bottom 0.3s ease-in-out";
    }, x);
}
showNavLower(); // Show navLower on page load
hideNavLowerWithDelay(5000); // Hide navLower after 5 seconds
navLowerTransparent.addEventListener("mouseenter", showNavLower);
navLowerTransparent.addEventListener("mouseleave", hideNavLowerWithDelay);
navLower.addEventListener("mouseenter", showNavLower);
navLower.addEventListener("mouseleave", hideNavLowerWithDelay);