let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

document.getElementById('menu-btn').onclick = function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('show-links');
};

// JavaScript code to manage the header visibility on scroll
let lastScrollPosition = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    header.classList.add("hidden");
  } else {
    // Scrolling up
    header.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});


