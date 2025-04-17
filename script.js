const cursor = document.querySelector(".cursor");
const hoverTargets = document.querySelectorAll(
  "h1, button, a, p, .btn-signing-main, .btn-get-started"
);

let mouseX = 0,
  mouseY = 0;
let currentX = 0,
  currentY = 0;

function animateCursor() {
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;
  cursor.style.transform = `translate3d(${
    currentX - cursor.offsetWidth / 2
  }px, ${currentY - cursor.offsetHeight / 2}px, 0)`;

  hoverTargets.forEach((target) => {
    const rect = target.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  });

  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const { innerHeight } = window;
gsap.registerPlugin(ScrollTrigger);
gsap.from("#zoom-out h2", {
  scale: 20,
  duration: 3,
  scrollTrigger: {
    trigger: "#zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});
