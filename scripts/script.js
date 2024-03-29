const rangeValue = document.querySelector(".rangeValue");
const rangeValue2 = document.querySelector(".rangeValue2 span");
const profit_summ = document.querySelector(".profit_summ");

const initFirstValue = parseFloat(
  document.querySelector(".range_box input").value
);
const initSecondValue = parseFloat(
  document.querySelector(".range_box2 input").value
);

const rangeData = {
  firstValue: initFirstValue,
  secondValue: initSecondValue,
};

const calculate = () => {
  const summ =
    ((rangeData.firstValue * rangeData.secondValue) / 100) * 15 +
    rangeData.firstValue;
  profit_summ.innerHTML = `$${summ.toFixed(1)}`;
};

// Initialize the sum
calculate();

// For the first slider
document.querySelectorAll(".range_box input").forEach((item) => {
  item.addEventListener("input", function () {
    rangeValue.innerHTML = `$${this.value}`;
    rangeData.firstValue = parseFloat(this.value);
    calculate();
  });
});

// For the second slider
document.querySelectorAll(".range_box2 input").forEach((item) => {
  item.addEventListener("input", function () {
    rangeValue2.innerHTML = `${this.value}`;
    rangeData.secondValue = parseFloat(this.value);
    calculate();
  });
});

// Tabs
const { Tablist } = jolty;
Tablist.initAll();

// mob nav
const nav_wrapper = document.querySelector(".nav_wrapper");
const toggleMob = () => {
  nav_wrapper.classList.toggle("mob_menu");
  if (nav_wrapper.classList[1] == "mob_menu") {
    document.querySelector(".header_content").style.display = "none";
    document.querySelector(".header_bottom_content").style.display = "none";
  } else {
    document.querySelector(".header_content").style.display = "block";
    document.querySelector(".header_bottom_content").style.display = "flex";
  }
};

// const menu = document.querySelector(".nav_wrapper");
// const targetBlock = document.querySelector(".advantages");

// window.addEventListener("scroll", function () {
//   const scrollPosition = window.scrollY;

//   if (scrollPosition >= targetBlock.offsetTop) {

//     menu.classList.add("active_white_menu");
//   } else {
//     menu.classList.remove("active_white_menu");
//   }
// });

// cursor grab
let isMouseDown = false;
let startX;

const scrollContainer = document.querySelector(".road_list");

scrollContainer.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollContainer.style.cursor = "grabbing";
});

scrollContainer.addEventListener("mouseleave", () => {
  isMouseDown = false;
  scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mouseup", () => {
  isMouseDown = false;
  scrollContainer.style.cursor = "grab";
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const scroll = x - startX;
  scrollContainer.scrollLeft -= scroll;
  startX = x;
});

// Video

document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.querySelector("video");
  if (videoElement) {
    videoElement.play();
  }
});
