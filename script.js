const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); // Prevent

  // Validator first name
  const firstName = document.getElementById("fN").value.trim();
  if (firstName === "") {
    showError("fN", "First name is required");
  } else if (containsNumbers(firstName)) {
    showError("fN", "First name cannot contain numbers");
  } else {
    clearError("fN");
  }

  // Validator last name
  const lastName = document.getElementById("lN").value.trim();
  if (lastName === "") {
    showError("lN", "Last name is required");
  } else if (containsNumbers(lastName)) {
    showError("lN", "Last name cannot contain numbers");
  } else {
    clearError("lN");
  }

  // Validator state
  const state = document.getElementById("country").value;
  if (state === "") {
    showError("country", "Please select a state");
  } else {
    clearError("country");
  }

  // Validator self-description
  const description = document.getElementById("subject").value.trim();
  if (description === "") {
    showError("subject", "Please write something about yourself you like!");
  } else {
    clearError("subject");
  }

  // If all validations pass, submit the form
  const hasErrors = document.querySelectorAll(".error").length > 0;
  if (!hasErrors) {
    showSuccessMessage("success", "Form submitted successfully!");
    form.submit();
  }
}

function containsNumbers(input) {
  return /\d/.test(input);
}
function showError(fieldId, message) {
  alert(message);
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  field.classList.remove("border-red-500");
  const errorMessage = field.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
}

function showSuccessMessage() {
  const popupContainer = document.getElementById("popup-container");
  const popup = document.createElement("div");
  popup.classList.add(
    "popup",
    "bg-green-200",
    "text-green-800",
    "p-4",
    "rounded",
    "fixed",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "z-50"
  );
}
