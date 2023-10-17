const rangeValue = document.querySelector(".rangeValue");
const rangeValue2 = document.querySelector(".rangeValue2");
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
  profit_summ.innerHTML = `$${rangeData.firstValue * rangeData.secondValue}`;
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
    rangeValue2.innerHTML = `${this.value} мес`;
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
};

const menu = document.querySelector(".nav_wrapper");
const targetBlock = document.querySelector(".advantages");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= targetBlock.offsetTop) {

    menu.classList.add("active_white_menu");
  } else {
    menu.classList.remove("active_white_menu");
  }
});
