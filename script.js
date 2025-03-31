// Cursor 2
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("h2");

window.addEventListener("mousemove", cursor);
function cursor(e) {
  console.log(e);
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

const { innerHeight } = window;
gsap.registerPlugin(ScrollTrigger);
// zoom-out
gsap.from("#zoom-out h2", {
  scale: 50,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});

//
