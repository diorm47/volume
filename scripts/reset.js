const reset_username_section = document.querySelector(
  ".reset_username_section"
);
const reset_username_block = document.querySelector(
  ".reset_username_block"
);

const set_password = document.querySelector(".set_password");
const fill_code = document.querySelector(".fill_code");
const getCode = () => {
  reset_username_section.style.display = "none";
  fill_code.style.display = "block";
};
const setPasswordReset = () => {
  fill_code.style.display = "none";
  set_password.style.display = "block";
};
const endReset = () => {
  set_password.style.display = "none";
  reset_username_block.style.display = "block";
};


//
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};
const auth_input = document.querySelector(".auth_input");
const submitBtn = document.querySelector(".resetEmailbtn");
const username = document.getElementById("resetusername");
const error_email = document.querySelector(".error_email");
const userEmail = () => {
  localStorage.setItem("userEmail", username.value);
  if (!validateEmail(username.value)) {
    error_email.textContent = "Неправильный email";
    submitBtn.disabled = true;
    username.classList.add("error_input");
  } else {
    error_email.textContent = "";
    submitBtn.disabled = false;
    username.classList.remove("error_input");
  }
};

//

document.addEventListener("DOMContentLoaded", function () {
  var sending_email = document.querySelector(".sending_email");
  sending_email.innerHTML = localStorage.getItem("userEmail");
  console.log(username);
  var inputs = document.querySelectorAll(".form-control");
  var confirmBtn = document.querySelector(".fill_code_svm");

  Array.from(inputs).forEach(function (input) {
    input.addEventListener("keyup", function (e) {
      var keyCode = e.keyCode;
      var parent = this.parentElement;

      if (keyCode === 8 || keyCode === 37) {
        var prev = parent.querySelector(
          "input#" + this.getAttribute("data-previous")
        );
        if (prev) {
          prev.focus();
        }
      } else if (
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 96 && keyCode <= 105) ||
        keyCode === 39
      ) {
        var next = parent.querySelector(
          "input#" + this.getAttribute("data-next")
        );
        if (next) {
          next.focus();
        }
      }

      var allFilled = Array.from(inputs).every(function (inputElem) {
        return inputElem.value !== "";
      });

      if (allFilled) {
        confirmBtn.removeAttribute("disabled");
      } else {
        confirmBtn.setAttribute("disabled", "true");
      }
    });
  });
});

var timerElement = document.querySelector(".getcode_timer p");
var minutes = 5;
var seconds = 0;

function updateTimer() {
  var minuteString = minutes.toString().padStart(2, "0");
  var secondString = seconds.toString().padStart(2, "0");
  timerElement.textContent = `Отправить повторно (${minuteString}:${secondString})`;
}

var timerInterval = setInterval(function () {
  updateTimer();

  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Можно отправить повторно";
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
  }
}, 1000);

updateTimer();

//

(function () {
  var eightPlus = document.getElementById("eight-plus");
  var uppercase = document.getElementById("uppercase");
  var lowercase = document.getElementById("lowercase");
  var numbers = document.getElementById("numbers");

  var passwordInput = document.getElementById("password");

  var verifyPasswordSubmitBtn = document.querySelector(
    ".verify-password-submit"
  );
  var verifyPasswordInput = document.getElementById("verify-password");

  var containsUppercase = /[A-Z]/;
  var containsLowercase = /[a-z]/;
  var containsNumbers = /[0-9]/;

  passwordInput.addEventListener("input", function () {
    var value = passwordInput.value;

    // More than 8 characters
    if (value.length >= 8) eightPlus.classList.add("complete");
    else eightPlus.classList.remove("complete");

    // Contains uppercase
    if (containsUppercase.test(value)) uppercase.classList.add("complete");
    else uppercase.classList.remove("complete");

    // Contains lowercase
    if (containsLowercase.test(value)) lowercase.classList.add("complete");
    else lowercase.classList.remove("complete");

    // Contains numbers
    if (containsNumbers.test(value)) numbers.classList.add("complete");
    else numbers.classList.remove("complete");
  });

  verifyPasswordInput.addEventListener("input", function () {
    var passwordsDoMatch = verifyPasswordInput.value === passwordInput.value;
    console.log(passwordsDoMatch);
    verifyPasswordSubmitBtn.disabled = !passwordsDoMatch;
  });
})();
