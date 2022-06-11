const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    preloadImages: false,

    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    observer: true,
    observeSlideChildren: true,
    observeParents: true,

    keyboard:{
      enabled: true
    },

    mousewheel: {
      invert: true,
    },

    on: {
      observerUpdate: function () {

      },
    },

    breakpoints: {
      660: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      370: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    }
  });

function openSlider(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("swiper-container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// today
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;

document.querySelector("#today").valueAsDate = new Date();


let today2 = new Date()
let time = today2.getHours() + ":" + today2.getMinutes()
document.querySelector("#todayTime").value = time;

// burger
const burger = document.getElementById('burger'),
      mobMenu = document.getElementById('mob-menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  mobMenu.classList.toggle('active')
})

