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