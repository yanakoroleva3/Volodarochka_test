$(document).ready(function(){
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed:2000,
    });
  });

  function myFunction() {
    document.getElementById("header__more").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu_open')) {

    let dropdowns = document.getElementsByClassName("header__menu__more__content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})

function footerMoreFirst() {
  document.getElementById("footer__menu__more__first").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.footer__more__1')) {

  let dropdowns = document.getElementsByClassName("footer__menu__more__first");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function footerMoreSecond() {
  document.getElementById("footer__menu__more__second").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.footer__more__2')) {

  let dropdowns = document.getElementsByClassName("footer__menu__more__second");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function footerMoreThird() {
  document.getElementById("footer__menu__more__third").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.footer__more__3')) {

  let dropdowns = document.getElementsByClassName("footer__menu__more__third");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}