const email = document.getElementById("email");
const button = document.querySelector(".button");
const errorText = document.querySelector(".error_text");

button.addEventListener("click", function () {
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.+[a-zA-Z0-9-]+)*$/;

  if (email.value.match(emailFormat)) {
    errorText.classList.add("hide");
    email.classList.remove("active");
  } else {
    errorText.classList.remove("hide");
    email.classList.add("active");
  }
});
