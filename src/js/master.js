let inpDrkLt = document.getElementById("drkLt");
let imgDrkLt = document.getElementById("imgDrkLt");

inpDrkLt.addEventListener("click", () => {
  inpDrkLt.classList.toggle("bg-[#b392ff]");

  if (imgDrkLt.getAttribute("src") === "src/images/lightModeWhite.png") {
    imgDrkLt.setAttribute("src", "src/images/darkModeBlack.png");
  } else {
    imgDrkLt.setAttribute("src", "src/images/lightModeWhite.png");
  }
});

// home submenu
let inpSubHome = document.getElementById("inpSubHome");
let subHome = document.getElementById("subHome");

inpSubHome.addEventListener("click", () => {
  subHome.classList.toggle("absolute");
  subHome.classList.toggle("invisible");
  subHome.classList.toggle("opacity-0");
  inpSubHome.classList.toggle("after:rotate-180");
  inpSubHome.classList.toggle("after:origin-top");
});

// Explore submenu
let inpSubExplore = document.getElementById("inpSubExplore");
let subExplore = document.getElementById("subExplore");

inpSubExplore.addEventListener("click", () => {
  subExplore.classList.toggle("absolute");
  subExplore.classList.toggle("invisible");
  subExplore.classList.toggle("opacity-0");
  inpSubExplore.classList.toggle("after:rotate-180");
  inpSubExplore.classList.toggle("after:origin-top");
});

let inpMobMenu = document.getElementById("inpMobMenu");
let closebtn = document.getElementById("closebtn");
let mobMenu = document.getElementById("mobMenu");
inpMobMenu.addEventListener("click", () => {
  mobMenu.classList.remove("right-full");
  mobMenu.classList.add("right-0");
});

closebtn.addEventListener("click", () => {
  mobMenu.classList.add("right-full");
  mobMenu.classList.remove("right-0");
});
