// Cursor 2
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("h1, h2, button, a, p");

window.addEventListener("mousemove", cursor, { passive: true });

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(
  (link) => {
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("hovered-link");
    });
    link.addEventListener("mousemove", () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("hovered-link");
    });
  },
  { passive: true }
);
