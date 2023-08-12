let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let mainPage = document.querySelector(".main");
let blogPage = document.querySelector(".trends");
let aboutUs = document.querySelector(".about");
let contactUs = document.querySelector(".contact");

function homes() {
  mainPage.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blogPage.style.display = "block";
  aboutUs.style.display = "none";
  contactUs.style.display = "none";
  document.getElementById("blogs").style.color = "black";
  document.getElementById("home").style.color = "rgb(10, 147, 147)";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shops").style.color = "black";
}

function shops() {
  mainPage.style.display = "none";
  aboutUs.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  blogPage.style.display = "none";
  contactUs.style.display = "none";
  document.getElementById("blogs").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shops").style.color = "rgb(10, 147, 147)";
}

function blogs() {
  aboutUs.style.display = "none";
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  contactUs.style.display = "none";
  blogPage.style.display = "block";

  document.getElementById("blogs").style.color = "rgb(10, 147, 147)";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shops").style.color = "black";
}

function about() {
  aboutUs.style.display = "block";
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogPage.style.display = "none";
  contactUs.style.display = "none";

  document.getElementById("blogs").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "rgb(10, 147, 147)";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shops").style.color = "black";
}

function contact() {
  contactUs.style.display = "block";
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogPage.style.display = "none";
  aboutUs.style.display = "none";

  document.getElementById("blogs").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "rgb(10, 147, 147)";
  document.getElementById("shops").style.color = "black";
}

//cart

function show(img) {
  let newImg = document.getElementById("newImg");
  console.log(img);
  newImg.src = img.src;
  document.querySelector(".cart").style.display = "flex";

  contactUs.style.display = "none";
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blogPage.style.display = "none";
  aboutUs.style.display = "none";
}

function addCart() {
  alert("Item added to cart");
  //used for completlety reloading the page to home page
  location.reload();
}

function explore() {
  mainPage.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  blogPage.style.display = "block";
  aboutUs.style.display = "none";
  contactUs.style.display = "none";
}
