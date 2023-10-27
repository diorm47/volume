document.addEventListener("DOMContentLoaded", function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const clearUsername = document.getElementById("clearUsername");
  const togglePassword = document.getElementById("togglePassword");
  const error = document.getElementById("error");
  const error_email = document.querySelector(".error_email");
  const submitBtn = document.getElementById("submitBtn");
  const clearUsernameIcon = document.getElementById("clearUsername");
  const togglePasswordIcon = document.getElementById("togglePassword");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  clearUsername.addEventListener("click", () => {
    username.value = "";
  });
  const checkButtonState = () => {
    submitBtn.disabled = !(username.value && password.value.length >= 8);
  };
  username.addEventListener("blur", () => {
    if (!validateEmail(username.value)) {
      error_email.textContent = "Неправильный email";
      submitBtn.disabled = true;
      username.classList.add("error_input");
    } else {
      error_email.textContent = "";
      submitBtn.disabled = false;
      username.classList.remove("error_input");
    }
    checkButtonState();
  });
  password.addEventListener("input", () => {
    togglePasswordIcon.style.display = password.value ? "block" : "none";
    checkButtonState();
  });

  togglePassword.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
  });

  password.addEventListener("blur", () => {
    if (password.value.length < 8) {
      error.textContent = "Введите пароль длиной от 8 до 32 символов";
      submitBtn.disabled = true;
      password.classList.add("error_input");
    } else {
      error.textContent = "";
      submitBtn.disabled = false;
      password.classList.remove("error_input");
    }
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(
    '.login_input input[type="text"], .login_input input[type="email"]'
  );

  inputFields.forEach((input) => {
    const clearIcon = input.nextElementSibling;

    // Скрыть иконку при инициализации
    clearIcon.style.display = "none";

    // Показать иконку, если поле не пустое
    input.addEventListener("input", () => {
      clearIcon.style.display = input.value ? "block" : "none";
    });

    // Очистить поле при клике на иконку
    clearIcon.addEventListener("click", () => {
      input.value = "";
      clearIcon.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const passwordFields = document.querySelectorAll('.login_input input[type="password"]');

  passwordFields.forEach(input => {
    const toggleIcon = input.nextElementSibling;
    const visibleIcon = toggleIcon.nextElementSibling;

    // Скрыть иконки при инициализации
    toggleIcon.style.display = "none";
    visibleIcon.style.display = "none";
    
    // Показать иконку, если поле не пустое
    input.addEventListener("input", () => {
      const displayStatus = input.value ? "block" : "none";
      if(input.type === "password") {
        toggleIcon.style.display = displayStatus;
      } else {
        visibleIcon.style.display = displayStatus;
      }
    });

    // Переключение видимости пароля
    toggleIcon.addEventListener("click", () => {
      input.type = "text";
      toggleIcon.style.display = "none";
      visibleIcon.style.display = "block";
    });

    visibleIcon.addEventListener("click", () => {
      input.type = "password";
      visibleIcon.style.display = "none";
      toggleIcon.style.display = "block";
    });
  });
});
  