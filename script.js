// Cursor 2
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(
  "h1, button, a, p, .nav-list a, .btn-get-started, .btn-signing-main"
);

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mousemove", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});

// BLUR FOR NAV DURING SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const { innerHeight } = window;
gsap.registerPlugin(ScrollTrigger);
// zoom-out
gsap.from("#zoom-out h2", {
  scale: 30,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});
