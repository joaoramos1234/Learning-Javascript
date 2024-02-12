function togglePassword() {
  let password = document.getElementById("password");
  let password_show = document.getElementById("password-show");

  if (password.type === "password") {
    password.type = "text";
    password_show.src = "aberto.jpg";
  } else {
    password.type = "password";
    password_show.src = "fechado.jpg";
  }
}
