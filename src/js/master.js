// dark menu button

let inpDrkLt = document.getElementById("drkLt");
let imgDrkLt = document.getElementById("imgDrkLt");
let _main = document.querySelector("main");
let homeArrow = document.getElementById("homeArrow");
let exploreArrow = document.getElementById("exploreArrow");
let nfts = document.getElementById("nfts");
let mobMenuL = document.getElementById("mobMenuL");

inpDrkLt.addEventListener("click", () => {
  inpDrkLt.classList.toggle("bg-[#946dee]");
  _main.classList.toggle("dark");
  mobMenuL.classList.toggle("bg-[#131313ab]");
  mobMenuL.classList.toggle("bg-[#dadada]");
  homeArrow.classList.toggle("after:border-t-white");
  homeArrow.classList.toggle("after:border-t-black");
  exploreArrow.classList.toggle("after:border-t-white");
  exploreArrow.classList.toggle("after:border-t-black");
  nfts.classList.toggle("text-[#b392ff]");
  nfts.classList.toggle("text-[#6542b6]");
  if (imgDrkLt.getAttribute("src") === "src/images/lightModeWhite.png") {
    imgDrkLt.setAttribute("src", "src/images/darkModeBlack.png");
  } else {
    imgDrkLt.setAttribute("src", "src/images/lightModeWhite.png");
  }
});

// home submenu
let inpSubHome = document.getElementById("inpSubHome");
let subHome = document.getElementById("subHome");

// ذخیره ارتفاع واقعی
subHome.setAttribute("data-h", subHome.clientHeight);
subHome.style.height = "0";

inpSubHome.addEventListener("click", () => {
  if (subHome.style.height === "0px") {
    subHome.style.height = subHome.getAttribute("data-h") + "px";
    inpSubHome.classList.add("after:rotate-180"); // کلاسی برای after
  } else {
    subHome.style.height = "0";
    inpSubHome.classList.remove("after:rotate-180");
  }
});

// Explore submenu
let inpSubExplore = document.getElementById("inpSubExplore");
let subExplore = document.getElementById("subExplore");

subExplore.setAttribute("data-h", subExplore.clientHeight);
subExplore.style.height = "0";

inpSubExplore.addEventListener("click", () => {
  if (subExplore.style.height === "0px") {
    subExplore.style.height = subExplore.getAttribute("data-h") + "px";
    inpSubExplore.classList.add("after:rotate-180");
  } else {
    subExplore.style.height = "0";
    inpSubExplore.classList.remove("after:rotate-180");
  }
});

// menu mobile

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
// ----------------accordion------------------
let ans = document.querySelectorAll(".answer");
ans.forEach((val) => {
  val.setAttribute("data-h", val.clientHeight);
  val.style.height = "0";
  val.style.padding = "0";
  val.style.overflow = "hidden";
  val.style.transition = ".4s";
});

let sp = document.querySelectorAll("section > div > span");
sp.forEach((val, i) => {
  val.addEventListener("click", () => {
    sp.forEach((num, index) => {
      if (index !== i) {
        num.nextElementSibling.style.height = "0";
        num.nextElementSibling.style.padding = "0";
        num.nextElementSibling.style.overflow = "hidden";
        num.innerText = "+";
      }
    });

    const answer = val.nextElementSibling;
    if (answer.style.height === "0px") {
      answer.style.height = answer.getAttribute("data-h") + "px";
      answer.style.padding = "20px";
      answer.style.overflow = "visible";
      val.innerText = "-";
    } else {
      answer.style.height = "0";
      answer.style.padding = "0";
      answer.style.overflow = "hidden";
      val.innerText = "+";
    }
  });
});
