function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const firstMessageError =
  "Minimum 2 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés.";
const lastMessageError =
  "Minimum 2 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés.";
const emailMessageError = "L'adresse électronique n'est pas valide.";
const birthdateMessageError = "Vous devez avoir au moins 18ans.";
const quantityMessageError = "La quantité doit être compris entre 0 et 99.";
const locationsMessageError = "Veuillez sélectionner la ville du tournoi.";
const conditionsMessageError =
  "Les conditions d'utilisation doivent être lus et acceptés pour valider l'inscription.";
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// age over 18yo

function validateBirthdateValue(birthdateValue) {
  const currentDate = new Date();
  const userDate = new Date(birthdateValue);
  const minAgeDate = new Date();
  minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
  if (isNaN(userDate) || userDate > currentDate) {
    return false;
  } else if (userDate > minAgeDate) {
    return false;
  } else {
    return true;
  }
}

// validate modal

function validate() {
  validateFirst();
  validateLast();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateLocations();
  validateConditions();
  validateNews();
}
function validateFirst() {
  let firstName = document.getElementById("first");
  let firstNameValue = firstName.value;
  let regexFirst = new RegExp("^[a-zA-Z-]{2,}$");
  let validFirst = regexFirst.test(firstNameValue);
  console.log(validFirst);
  if (validFirst === false) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.parentElement.setAttribute("data-error", firstMessageError);
  } else {
    firstName.parentElement.removeAttribute("data-error-visible");
    firstName.parentElement.removeAttribute("data-error");
  }
}
function validateLast() {
  let lastName = document.getElementById("last");
  let lastNameValue = lastName.value;
  let regexLast = new RegExp("^[a-zA-Z-]{2,}$");
  let validLast = regexLast.test(lastNameValue);
  console.log(validLast);
  if (validLast === false) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.parentElement.setAttribute("data-error", lastMessageError);
  } else {
    lastName.parentElement.removeAttribute("data-error-visible");
    lastName.parentElement.removeAttribute("data-error");
  }
}
function validateEmail() {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$");
  let validEmail = regexEmail.test(emailValue);
  console.log(validEmail);
  if (validEmail === false) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", emailMessageError);
  } else {
    email.parentElement.removeAttribute("data-error-visible");
    email.parentElement.removeAttribute("data-error");
  }
}
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  let birthdateValue = birthdate.value;
  validateBirthdateValue(birthdateValue);
  console.log(validateBirthdateValue(birthdateValue));
  if (validateBirthdateValue(birthdateValue) === false) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute("data-error", birthdateMessageError);
  } else {
    birthdate.parentElement.removeAttribute("data-error-visible");
    birthdate.parentElement.removeAttribute("data-error");
  }
}
function validateQuantity() {
  let quantity = document.getElementById("quantity");
  let quantityValue = quantity.value;
  let regexQuantity = new RegExp("^[1-9][0-9]?$");
  let validQuantity = regexQuantity.test(quantityValue);
  console.log(validQuantity);
  if (validQuantity === false) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute("data-error", quantityMessageError);
  } else {
    quantity.parentElement.removeAttribute("data-error-visible");
    quantity.parentElement.removeAttribute("data-error");
  }
}
function validateLocations() {
  let location1 = document.getElementById("location1");
  let location2 = document.getElementById("location2");
  let location3 = document.getElementById("location3");
  let location4 = document.getElementById("location4");
  let location5 = document.getElementById("location5");
  let location6 = document.getElementById("location6");
  let locations = [
    location1,
    location2,
    location3,
    location4,
    location5,
    location6,
  ];
  console.log(locations);
  let validLocations = "";
  validLocations = locations.find((input) => input.checked === true);
  console.log(validLocations);
  if (validLocations === undefined) {
    location1.parentElement.setAttribute("data-error-visible", "true");
    location1.parentElement.setAttribute("data-error", locationsMessageError);
    return false;
  } else {
    location1.parentElement.removeAttribute("data-error-visible");
    location1.parentElement.removeAttribute("data-error");
    return true;
  }
}
function validateConditions() {
  let condition = document.getElementById("checkbox1");
  if (condition.checked) {
    condition.parentElement.removeAttribute("data-error-visible");
    condition.parentElement.removeAttribute("data-error");
    console.log(true);
    return true;
  } else {
    condition.parentElement.setAttribute("data-error-visible", "true");
    condition.parentElement.setAttribute("data-error", conditionsMessageError);
    console.log(false);
    return false;
  }
}
function validateNews() {
  let news = document.getElementById("checkbox2");
  if (news.checked) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// submit

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
