const btnToggle = document.getElementById("btnToggle");
const nav = document.querySelector(".navbar__nav");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav__link");
const about = document.getElementById("about");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

// appartion of the nav when we click on the toggleBtn
btnToggle.addEventListener("click", () => {
  nav.classList.toggle("navbar__nav--active");
});

// Apparition of fixed navbar
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
  
    if (scrollHeight > navHeight) {
      navbar.classList.add("navbar__fixed");
    } else {
      navbar.classList.remove("navbar__fixed");
    }
  });

// // nav links active
// window.addEventListener("scroll", function () {
//     const scrollHeight = window.pageYOffset;
//     const aboutTop = about.offsetTop

  
//     if (scrollHeight > offsetTop) {
//       navbar.classList.add("navbar__fixed");
//     } else {
//       navbar.classList.remove("navbar__fixed");
//     }
//   });


// smooth scroll
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        // get the element of the links anchor
        const id = e.currentTarget.getAttribute('href')
        const element = document.querySelector(id)

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
    })
})