let index = [...document.querySelectorAll("section")];
const animation = document.querySelectorAll(".animation");
const topBtn = document.querySelector("#top");
const bottomBtn = document.querySelector("#bottom");

let i = 0;
let windowScreenTop = window.pageYOffset;
if (i == 0) topBtn.style.opacity = ".5";
window.addEventListener("keydown", function ({ keyCode }) {
  switch (keyCode) {
    case 39:
      setBottom();
      break;
    case 37:
      setTop();
      break;
    case 38:
      setTop();
      break;
    case 40:
      setBottom();
      break;
    default:
      break;
  }
});

function setTop() {
  if (i - 1 == 0) topBtn.style.opacity = ".5";
  if (i == 0) return;
  bottomBtn.style.opacity = "1";
  Animation();
  i--;
  index[i].style.marginLeft = "0";

  index[i].style.marginTop = "0";
}
function setBottom() {
  if (i + 1 >= index.length - 1) bottomBtn.style.opacity = ".5";
  if (i + 1 >= index.length) return;
  topBtn.style.opacity = "1";
  if (index[i].classList.contains("left")) {
    index[i].style.marginLeft = "-100vw";
  } else if (index[i].classList.contains("right")) {
    index[i].style.marginLeft = "100vw";
  }
  index[i].style.marginTop = "-100vh";

  i++;
  Animation();
}
Animation();
function Animation(params) {
  const items = index[i].querySelectorAll(".animation");
  const items2 = i == 0 ? [] : index[i - 1].querySelectorAll(".animation");
  items2.forEach((e) => {
    if (e.classList.contains("show")) {
      e.classList.remove("show");
    } else {
      e.classList.add("show");
    }
  });
  items.forEach((e) => {
    if (e.classList.contains("show")) {
      e.classList.remove("show");
    } else {
      e.classList.add("show");
    }
  });
}
let partikels = [];
let partikelElement = document.createElement("span");

for (let i = 0; i < 500; i++) {
  partikelElement.classList.add("partikel");
  partikelElement.style.width = `${Math.random() * i + 10}`;
  document.innerHTML = partikelElement;
}
