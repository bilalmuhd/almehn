import "../css/input.css";
const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

// event trigger
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// toggle expand text

function toggleText(element) {
  const h3 = element.querySelector("h3");
  const isExpanded = h3.classList.contains("line-clamp-none");

  if (isExpanded) {
    h3.classList.remove("line-clamp-none");
    h3.classList.add("line-clamp-3");
    element.style.height = "560px";
  } else {
    h3.classList.remove("line-clamp-3");
    h3.classList.add("line-clamp-none");
    element.style.height = "auto";
  }
}

// scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  delay: 100,
  // reset: true;,
});

// hero
sr.reveal(".hero__text", { origin: "top" });

// steps
sr.reveal(".steps__step", { distance: "100px", interval: 100 });

// about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 300 });

// testimonials
sr.reveal(".testimonial__bg", { delay: 300 });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: 400 });

// brands
sr.reveal(".brands__img", { delay: 400, distance: "100px", interval: 100 });

// work
sr.reveal(".work__title");
sr.reveal(".work__subtitle", { delay: 400 });
sr.reveal(".work__grid", { delay: 600 });

// stats
sr.reveal(".stats");
sr.reveal(".stats__item", {
  distance: "100px",
  interval: 100,
});

// news
sr.reveal(".news_title");
sr.reveal(".news_subtitle", { delay: 400 });
sr.reveal(".news__item", {
  distance: "100px",
  interval: 100,
  delay: 600,
});

// contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 400 });

// footer
sr.reveal(".footer__item", {
  distance: "50px",
  interval: 100,
});
sr.reveal(".footer__copyright");
