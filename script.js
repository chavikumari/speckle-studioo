function showStudioIntro() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  try {
    if (sessionStorage.getItem("speckle-visited")) return;
    sessionStorage.setItem("speckle-visited", "1");
  } catch {
    // Some browsers restrict storage for locally opened files.
  }

  const overlay = document.createElement("div");
  overlay.className = "intro";
  overlay.setAttribute("aria-label", "It starts with a speck");

  const message = document.createElement("p");
  message.textContent = "It starts with a speck!";
  const skip = document.createElement("button");
  skip.type = "button";
  skip.textContent = "Skip intro ↗";
  preact.render(preact.h(Star), overlay);
  overlay.append(message, skip);
  document.body.prepend(overlay);

  const timer = setTimeout(() => overlay.remove(), 1150);
  skip.onclick = () => {
    clearTimeout(timer);
    overlay.remove();
  };
}
showStudioIntro();

// Each page contains its own HTML. Only the interactive sections need rendering.
function mount(selector, component, props = {}) {
  const section = document.querySelector(selector);
  if (!section) return;
  const host = document.createElement("div");
  host.style.display = "contents";
  section.replaceWith(host);
  preact.render(preact.h(component, props), host);
}
mount(".doodle-section", Doodle);
mount(".inquiry-form", Enquiry);
const gallery = document.querySelector(".project-gallery");
if (gallery) {
  const thumb = gallery.querySelector(".gallery-thumbnails img");
  mount(".project-gallery", Gallery, {
    slug: new URL(thumb.src).pathname.split("/").at(-2),
    title: gallery
      .getAttribute("aria-label")
      .replace(" image and video gallery", ""),
    media: JSON.parse(document.querySelector("#gallery-data").textContent),
  });
}

const menu = document.querySelector(".menu-toggle");
const mobile = document.createElement("div");
mobile.id = "mobile-navigation";
mobile.className = "mobile-nav";
mobile.setAttribute("role", "dialog");
mobile.setAttribute("aria-label", "Navigation");
const links = document.querySelector(".desktop-nav").cloneNode(true);
links.removeAttribute("class");
links.querySelectorAll("a").forEach((link, index) => {
  const label = link.textContent.replace("↗", "");
  const number = document.createElement("small");
  number.textContent = String(index + 1).padStart(2, "0");
  const arrow = document.createElement("span");
  arrow.textContent = "↗";
  link.replaceChildren(number, label, arrow);
});
const signoff = document.createElement("p");
signoff.textContent = "Made with curiosity. Always.";
mobile.append(links, signoff);
function toggleMenu(open) {
  if (open) menu.after(mobile);
  else mobile.remove();
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "Close −" : "Menu +";
  document.body.style.overflow = open ? "hidden" : "";
  if (!open) menu.focus();
}
menu.onclick = () => toggleMenu(!mobile.isConnected);
document.addEventListener("keydown", (event) => {
  if (!mobile.isConnected) return;
  if (event.key === "Escape") toggleMenu(false);
  if (event.key === "Tab") {
    const last = links.querySelector("a:last-child");
    if (event.shiftKey && document.activeElement === menu) {
      event.preventDefault();
      last.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      menu.focus();
    }
  }
});
document.querySelector(".footer-bottom button").onclick = () =>
  window.scrollTo({
    top: 0,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries)
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0.35, transform: "translateY(32px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 800, easing: "ease-out" },
        );
        reveal.unobserve(entry.target);
      }
  });
  document
    .querySelectorAll("[data-reveal]")
    .forEach((node) => reveal.observe(node));
  if (matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const box = button.getBoundingClientRect();
        button.style.translate =
          (event.clientX - box.left - box.width / 2) * 0.12 +
          "px " +
          (event.clientY - box.top - box.height / 2) * 0.15 +
          "px";
      });
      button.addEventListener("pointerleave", () => {
        button.style.translate = "";
      });
    });
  }
}
