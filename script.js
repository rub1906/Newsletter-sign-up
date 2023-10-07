// Inputs
const emailInput = document.getElementById("emailInput");
const error = document.getElementById("error");
const subscribeButton = document.getElementById("subscribeButton");
const dismissButton = document.getElementById("dismissButton");
const emailText = document.getElementById("emailText");

// Forms
const signupForm = document.getElementById("signupForm");
const successForm = document.getElementById("successForm");

// Variables
let emailInputValue;

function checkEmailValidity() {
  if (emailInputValue == "") {
    error.textContent = "Please insert an email";
    emailInput.classList.add("errorState");
  } else {
    if (
      emailInputValue.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailText.textContent = emailInputValue;
      signupForm.style.display = "none";
      successForm.style.display = "flex";
      error.textContent = "";
      emailInput.classList.remove("errorState");
    } else {
      error.textContent = "Valid email required";
      emailInput.classList.add("errorState");
    }
  }
}

function emailValueAssign() {
  emailInputValue = emailInput.value;
}

subscribeButton.addEventListener("click", () => {
  emailValueAssign();
  checkEmailValidity();
});

emailInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    emailValueAssign();
    checkEmailValidity();
  }
});

dismissButton.addEventListener("click", () => {
  signupForm.style.display = "flex";
  successForm.style.display = "none";
});
