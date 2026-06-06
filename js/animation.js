// animations.js 🟡 (Scroll / UI animations)

// 👉 scroll reveal, intersection observer

// const items = document.querySelectorAll(".fade-up");


// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// });


// items.forEach(el => observer.observe(el));

// ✔ animation logic only
// ❌ navbar / form code না









document.addEventListener("mousemove", (e) => {

  buttons.forEach((btn) => {
      const rect = btn.getBoundingClientRect();
      // Find the center of the button
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
    
      // Distance from mouse to button center
      const distX = e.clientX - btnX;
      const distY = e.clientY - btnY;
    
      // Total distance
      const distance = Math.sqrt(distX * distX + distY * distY);
    
      // Animate with GSAP
      if (distance < strength) {
        gsap.to(btn, {
          x: distX * 0.3,
          y: distY * 0.3,
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto"
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto"
        });
      }
    });
});