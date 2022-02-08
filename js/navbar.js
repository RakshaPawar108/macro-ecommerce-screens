const navbarOpenBtn = document.querySelector(".navbar-open-btn");
const navbarCloseBtn = document.querySelector(".navbar-close-btn");
const navigation = document.querySelector(".navigation");

const openNavbar = () => {
  navigation.classList.add("navbar-show");
};

const closeNavbar = () => {
  navigation.classList.remove("navbar-show");
};

navbarOpenBtn.addEventListener("click", openNavbar);
navbarCloseBtn.addEventListener("click", closeNavbar);
