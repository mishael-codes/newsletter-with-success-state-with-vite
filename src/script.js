let emailInput = document.getElementById("email");
let submitButton = document.getElementById("btn");
let signupPage = document.querySelector(".signupPage");
let successPage = document.querySelector(".successPage");
let errorMessage = document.getElementById("error");
let form = document.querySelector('.form');

emailInput.addEventListener("change", () => {
  errorMessage.textContent = "";
  emailInput.classList.add("text-black");
  emailInput.classList.add("border-darkSlateGrey");
  emailInput.classList.add("bg-white");

  emailInput.classList.remove("text-tomato");
  emailInput.classList.remove("border-tomato");
  emailInput.classList.remove("bg-lightTomato");
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let email = emailInput.value;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || email.trim() === "" || !emailRegex.test(email)) {
    navigator.vibrate
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("text-tomato");
    emailInput.classList.add("border");
    emailInput.classList.add("border-tomato");
    emailInput.classList.add("bg-lightTomato");

    emailInput.classList.remove("text-black");
    emailInput.classList.remove("border-darkSlateGrey");
    emailInput.classList.remove("bg-white");
  } else if (email && emailRegex.test(email)) {
    signupPage.classList.remove("md:flex");
    signupPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    successPage.classList.add("flex");
  }
});

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    submitButton.click();
  }
})

let dismissButton = document.querySelector(".dismiss");

dismissButton.addEventListener("click", () => {
  location.reload();
});
