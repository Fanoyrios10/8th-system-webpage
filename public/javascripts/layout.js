"use strict";

// up and down animation on submenu and arrows (mobile navbar)

let dropbtn2 = document.querySelectorAll(".dropbtn2");
dropbtn2.forEach(element => {
      let sibling = element.nextElementSibling;
      let child = element.lastChild
      $(element).click(function () { 
        $(sibling).animate({
          height:'toggle'
        })
        if (child.classList.value === "fas fa-arrow-alt-circle-down" || child.classList.value === "fas fa-arrow-alt-circle-down transitionDown") {
          $(child).removeClass("transitionDown")
          $(child).addClass("transitionUp")
        }else{
          $(child).removeClass("transitionUp")
          $(child).addClass("transitionDown")
        }
      });
  })

// 

// Go to top button appearance and function
let goToTopButton = document.getElementById('GoToTop');
window.onscroll = function(){
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
) {
  goToTopButton.style.display = 'block';
} else {
  goToTopButton.style.display = 'none';
}
}

goToTopButton.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// 

// Get time and change background color
const body = document.querySelector('body')
const time = new Date().toLocaleTimeString();
let hour;
let amPm;
if (time.length === 10) {
  hour = time.substr(0, 1);
  amPm = time.substr(8, 10);
  hour = Number(hour);
  console.log(hour, amPm);
} else {
  hour = time.substr(0, 2);
  amPm = time.substr(9, 10);
  hour = Number(hour);
  console.log(hour, amPm);
}

if (
  (hour >= 8 && amPm === "PM" && hour <= 11) ||
  (hour <= 6 && amPm === "AM") ||
  (hour === 12 && amPm === "AM")
) {
  body.style.background = `linear-gradient(
    to bottom,
    rgb(0, 0, 0) 5%,
    rgb(79, 105, 136) 100%
  )`;
}

// 