document.addEventListener("DOMContentLoaded", function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const clearUsername = document.getElementById("clearUsername");
  const togglePassword = document.getElementById("togglePassword");
  const error = document.getElementById("error");
  const submitBtn = document.getElementById("submitBtn");
  const clearUsernameIcon = document.getElementById("clearUsername");
  const togglePasswordIcon = document.getElementById("togglePassword");

  clearUsername.addEventListener("click", () => {
    username.value = "";
  });
  const checkButtonState = () => {
    submitBtn.disabled = !(username.value && password.value.length >= 8);
  };
  username.addEventListener("input", () => {
    clearUsernameIcon.style.display = username.value ? "block" : "none";
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
