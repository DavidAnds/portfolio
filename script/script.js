const btnToggle = document.getElementById("btnToggle");
const nav = document.querySelector(".navbar__nav");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll(".section");

// appartion of the nav when we click on the toggleBtn
btnToggle.addEventListener("click", () => {
  nav.classList.toggle("navbar__nav--active");
  btnToggle.classList.toggle("btn-toggle--active")
});

// Apparition of fixed navbar
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
  
    if (scrollHeight > navHeight ) {
      navbar.classList.add("navbar__fixed");
    } else {
      navbar.classList.remove("navbar__fixed");
    }
  });


  // smooth scroll
links.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault()
      // get the element of the links anchor
      const id = e.currentTarget.getAttribute('href').slice(1)
      const element = document.getElementById(id)

      //calculate the position of element
      const navbarHeight = navbar.getBoundingClientRect().height
      const navHeight = nav.getBoundingClientRect().height
      const navFixed = navbar.classList.contains("navbar__fixed")

      let position = element.offsetTop - navHeight;
       if (!navFixed) {
         position = position ;
       }
       if (navHeight > 50 ) {
         position = position + navHeight - 40;
       }
       window.scrollTo({
         left: 0,
         top: position,
       });

       if (nav.classList.contains("navbar__nav--active")) {
           nav.classList.remove("navbar__nav--active")
       }

       if (btnToggle.classList.contains("btn-toggle--active")) {
        btnToggle.classList.remove("btn-toggle--active")
    }
  })
})

// // nav links active
window.addEventListener("scroll", function () {
  let current = "";
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop

    if(scrollHeight >= sectionTop - 200){
      current = section.getAttribute("id")
    }
  })

  links.forEach((link) => {
    link.classList.remove('nav__link--active')
    if (link.classList.contains(`nav__link--${current}`)) {
      link.classList.add('nav__link--active')
    }
  })
});

// Home animation 
var tl = gsap.timeline({
  defaults: {
    duration: .6,
    ease: "power2",
    autoAlpha: 1
}
})

tl
.to(".tertiary-heading", { x: -4})
.to(".primary-heading span", { y: 0, stagger: .15})
.to(".home__btn", { y: 0})
.to(".home__btn-text", {})
.to(".navbar", {})
