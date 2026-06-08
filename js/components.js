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






let isInactive = false;                                          // NEW
let mouseTriggered = false;                                      // NEW
let firstHideDone = false;

function showNavLower() {
    navLower.style.bottom = "0vh";
    navLower.style.transition = firstHideDone
    ? "bottom 0.3s ease-in-out, opacity 1s ease-in-out"
    : "bottom 0.9s ease-in-out, opacity 1s ease-in-out";                           // NEW
    navLower.style.opacity = "1";                                // NEW
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = null; // Clear the timeout reference
}

function hideNavLowerWithDelay(x = 500) {
    if (hideTimeout) 
        {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        // navLower.style.bottom = "-8vh";                                // NEW
        navLower.style.opacity = "0.6";
        navLower.style.transition = "opacity 1s ease-in-out";
        isInactive = true;                                          // NEW
        // navLower.style.transition = "bottom 5s ease-in-out";
    }, x);
}
showNavLower(); // Show navLower on page load
hideNavLowerWithDelay(5000); // Hide navLower after 5 seconds

window.addEventListener("mousemove", () => {
    if (!isInactive) return;

    if (!mouseTriggered) {
        navLower.style.transition = "bottom 0.9s ease-in-out";
        navLower.style.bottom = "-8vh";
        mouseTriggered = true;
        firstHideDone = true;
    }
});

navLowerTransparent.addEventListener("mouseenter", showNavLower);

navLowerTransparent.addEventListener("mouseleave", () => {
    hideNavLowerWithDelay(5000);

    if (mouseTriggered) {
        navLower.style.transition = "bottom 0.3s ease-in-out";
        navLower.style.bottom = "-8vh";
    }
});

navLower.addEventListener("mouseenter", showNavLower);

navLower.addEventListener("mouseleave", () => {
    hideNavLowerWithDelay(5000);

    if (mouseTriggered) {
        navLower.style.transition = "bottom 0.3s ease-in-out";
        navLower.style.bottom = "-8vh";
    }
});
// navLower.addEventListener("mouseenter", showNavLower);
// navLower.addEventListener("mouseleave", hideNavLowerWithDelay);