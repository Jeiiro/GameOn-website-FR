// function editNav() {
//   const toggled = document.querySelectorAll(".topnav a");
//   toggled.forEach((a) => {
//     if (a.style.display === "none") {
//       a.style.display = "block";
//     } else {
//       a.style.display = "none";
//     }
//   });
// }

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalsuccess = document.querySelector(".modal-success");
const submitBtn = document.querySelector(".btn-submit");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const closeModalBtn = document.querySelectorAll(".btn-close");

// Message ERROR
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

// launch modal success form

function launchModalSuccess() {
  modalbg.style.display = "none";
  modalsuccess.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal success event

closeModalBtn.forEach((btn) =>
  btn.addEventListener("click", closeModalSuccess)
);
closeBtn.forEach((btn) => btn.addEventListener("click", closeModalSuccess));

// close modal success form
function closeModalSuccess() {
  modalsuccess.style.display = "none";
}

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
  console.log(validateFirst());
  validateLast();
  console.log(validateLast());
  validateEmail();
  console.log(validateEmail());
  validateBirthdate();
  console.log(validateBirthdate());
  validateQuantity();
  console.log(validateQuantity());
  validateLocations();
  console.log(validateLocations());
  validateConditions();
  console.log(validateConditions());
  validateNews();
  console.log(validateNews());
  if (
    validateFirst() &&
    validateLast() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validateLocations() &&
    validateConditions() === true
  ) {
    return true;
  } else {
    return false;
  }
}
function validateFirst() {
  let firstName = document.getElementById("first");
  let firstNameValue = firstName.value;
  let regexFirst = new RegExp("^[a-zA-Z-]{2,}$");
  let validFirst = regexFirst.test(firstNameValue);
  if (validFirst === false) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.parentElement.setAttribute("data-error", firstMessageError);
    return false;
  } else {
    firstName.parentElement.removeAttribute("data-error-visible");
    firstName.parentElement.removeAttribute("data-error");
    return true;
  }
}
function validateLast() {
  let lastName = document.getElementById("last");
  let lastNameValue = lastName.value;
  let regexLast = new RegExp("^[a-zA-Z-]{2,}$");
  let validLast = regexLast.test(lastNameValue);
  if (validLast === false) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.parentElement.setAttribute("data-error", lastMessageError);
    return false;
  } else {
    lastName.parentElement.removeAttribute("data-error-visible");
    lastName.parentElement.removeAttribute("data-error");
    return true;
  }
}
function validateEmail() {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$");
  let validEmail = regexEmail.test(emailValue);
  if (validEmail === false) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", emailMessageError);
    return false;
  } else {
    email.parentElement.removeAttribute("data-error-visible");
    email.parentElement.removeAttribute("data-error");
    return true;
  }
}
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  let birthdateValue = birthdate.value;
  validateBirthdateValue(birthdateValue);
  if (validateBirthdateValue(birthdateValue) === false) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.parentElement.setAttribute("data-error", birthdateMessageError);
    return false;
  } else {
    birthdate.parentElement.removeAttribute("data-error-visible");
    birthdate.parentElement.removeAttribute("data-error");
    return true;
  }
}
function validateQuantity() {
  let quantity = document.getElementById("quantity");
  let quantityValue = quantity.value;
  let regexQuantity = new RegExp("^[1-9][0-9]?$");
  let validQuantity = regexQuantity.test(quantityValue);
  if (validQuantity === false) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute("data-error", quantityMessageError);
    return false;
  } else {
    quantity.parentElement.removeAttribute("data-error-visible");
    quantity.parentElement.removeAttribute("data-error");
    return true;
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
  let validLocations = "";
  validLocations = locations.find((input) => input.checked === true);
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
    return true;
  } else {
    condition.parentElement.setAttribute("data-error-visible", "true");
    condition.parentElement.setAttribute("data-error", conditionsMessageError);
    return false;
  }
}
function validateNews() {
  let news = document.getElementById("checkbox2");
  if (news.checked) {
    return true;
  } else {
    return false;
  }
}

// submit

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  if (validate() === true) {
    launchModalSuccess();
    form.reset();
  }
});
