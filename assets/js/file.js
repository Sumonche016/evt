function toggleMenu(event) {
  event.preventDefault();
  var sidebar_section = document.querySelector(".sidebar-header");
  var hamburger = document.querySelector(".hamburger");
  let class_list = sidebar_section.classList;
  if (class_list.contains("active")) {
    class_list.remove("active");
    hamburger.classList.remove("is-active");
  } else {
    class_list.add("active");
    hamburger.classList.add("is-active");
  }
}

var menu = document.querySelector(".menu");
menu.addEventListener("click", toggleMenu);

function closeMenu(event) {
  var hamburger = document.querySelector(".hamburger");
  document.querySelector(".sidebar-header").classList.remove("active");
  hamburger.classList.remove("is-active");
}

var overlay_close = document.querySelector(".overlay-close");
overlay_close.addEventListener("click", closeMenu);

$(document).ready(function () {
  $(".banner-slider").bxSlider({
    pager: false,
    touchEnabled: false,
  });

  var slideWidth;
  function calculateSlideWidth() {
    if ($(window).width() < 420) {
      slideWidth = $(window).width() - 20; // Adjust margin
    } else if ($(window).width() < 768) {
      slideWidth = Math.floor(($(window).width() - 40) / 2.5); // Adjust margin
    } else if ($(window).width() < 1200) {
      slideWidth = Math.floor(($(window).width() - 60) / 3.5); // Adjust margin
    } else {
      slideWidth = Math.floor(($(window).width() - 100) / 4.5); // Adjust margin
    }
  }
  calculateSlideWidth();

  $(".commer-slider").bxSlider({
    pager: false,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 20,
    slideWidth: slideWidth,
    infiniteLoop: false,
    touchEnabled: false,
  });
  // Recalculate slide width on window resize
  $(window).resize(function () {
    calculateSlideWidth();
    $(".commer-slider").each(function () {
      $(this).reloadSlider({
        slideWidth: slideWidth,
      });
    });
  });
});

// get the country data from the plugin
const countryData = window.intlTelInputGlobals.getCountryData();
const input = document.querySelector("#phone");
const addressDropdown = document.querySelector("#address-country");

// init plugin
const iti = window.intlTelInput(input, {
  initialCountry: "kw",
  utilsScript: "/intl-tel-input/js/utils.js?1710377899615", // just for formatting/placeholders etc
});

// populate the country dropdown
for (let i = 0; i < countryData.length; i++) {
  const country = countryData[i];
  const optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  const textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  //   addressDropdown.appendChild(optionNode);
}

$(".user-nav").on("click", function (event) {
  $(".popup").addClass("active");
});

$(".close-pop, .popup-overlay").on("click", function () {
  $(".popup").removeClass("active");
});

$("#login-ragister").on("click", function () {
  if ($(this).hasClass("active")) {
    $("#password").hide();
    $(".submit").html(
      ' <img src="assets/images/chat.svg" alt=""> Send verification code by SMS'
    );
    $(this).removeClass("active");
    $(this).text("Sign in with Password");
  } else {
    $("#password").show();
    $(".submit").text("login");
    $(this).addClass("active");
    $(this).text("Sign in with OTP");
  }
});

$("#ragister-login").on("click", function () {});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".btn");
  links[0].classList.add("active");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior

      // Remove the active class from all links
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add the active class to the clicked link
      this.classList.add("active");
    });
  });
});
