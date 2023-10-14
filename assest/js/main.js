// Mobile Menu
const btnMenu = document.querySelector(".nav .icon-menu");
const btnClose = document.querySelector(".nav ul .close");
const menu = document.querySelector(".nav ul");

btnMenu.addEventListener("click", fnOpenClose);
btnClose.addEventListener("click", fnOpenClose);

function fnOpenClose() {
  menu.classList.toggle("open-close");
}

// ===================================================//
// Start Swiper Js

// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });

// End Swiper Js
// ===================================================//

// ================= Selector =====================//
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");

const deskImg = document.getElementById("deskImg");
const mobImg = document.getElementById("mobImg");

const titleHeading = document.getElementById("titleHeading");
const paragraph = document.getElementById("paragraph");
// ================= Array =====================//
let arrHeading = ["LAUNCH VEHICLE", "SPACEPORT", "SPACE CAPSULE"];
let arrParagraph = [
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
];

// ================ Click Events ================ //

btnOne.addEventListener('click', (e) => {
  titleHeading.textContent = arrHeading[0];
  paragraph.textContent = arrParagraph[0];

  deskImg.src = './assest/img/technology/image-launch-vehicle-portrait.jpg';
  mobImg.src = './assest/img/technology/image-launch-vehicle-landscape.jpg';

})
btnTwo.addEventListener('click', (e) => {
  titleHeading.textContent = arrHeading[1];
  paragraph.textContent = arrParagraph[1]

  deskImg.src = './assest/img/technology/image-spaceport-portrait.jpg';
  mobImg.src = './assest/img/technology/image-spaceport-landscape.jpg';
})
btnThree.addEventListener('click', (e) => {
  titleHeading.textContent = arrHeading[2];
  paragraph.textContent = arrParagraph[2];

  deskImg.src = './assest/img/technology/image-space-capsule-portrait.jpg';
  mobImg.src = './assest/img/technology/image-space-capsule-landscape.jpg';

})

// =============== Active Class ===============//
const buttons = document.querySelectorAll(".buttons span");

buttons.forEach(span => {
  span.addEventListener('click', (e) => {
    buttons.forEach(ele => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})