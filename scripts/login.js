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
 console.log(error_email);
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
      error_email.textContent = "Непрвильный email";
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
