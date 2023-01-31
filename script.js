$('.owl-carousel').owlCarousel({
    items:2,
    lazyLoad:true,
    loop:true,
    margin:10
});

function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    navToggleNav.classList.toggle("_active")
    html.classList.toggle("_overflow");
    body.classList.toggle("_overflow");
}

function navClose() {
    var navToggleNav = document.getElementById("nav");
    navToggleNav.classList.remove("_active");
    var html = document.getElementById("html");
    html.classList.remove("_overflow");
    var body = document.getElementById("body");
    body.classList.remove("_overflow");
  }
  

