const rangeValue = document.querySelector(".rangeValue");
const rangeData = {
  firstValue: 0,
  secondValue: 0,
};

const profit_summ = document.querySelector(".profit_summ");

const calculate = () => {
  profit_summ.innerHTML = `$${rangeData.firstValue * rangeData.secondValue}`;
};

document.querySelectorAll(".range_box input").forEach((item) => {
  item.addEventListener("mousemove", function () {
    rangeValue.innerHTML = `$${this.value}`;
    rangeData.firstValue = this.value;
    calculate();
  });
});

const rangeValue2 = document.querySelector(".rangeValue2");
document.querySelectorAll(".range_box2 input").forEach((item) => {
  item.addEventListener("mousemove", function () {
    rangeValue2.innerHTML = `${this.value} мес`;
    rangeData.secondValue = this.value;
    calculate();
  });
});


// Tabs
const { Tablist } = jolty;
Tablist.initAll();