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

  // Valitador Phone Number

  const phoneNumber = document.getElementById("pN").value;
  if (state === "") {
    showError("pN", "Please enter a phone number.");
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phoneNumber)) {
      showError(
        "pN",
        "Please enter a valid 10-digit phone number (e.g., 123-456-7890)."
      );
    } else {
      clearError("pN");
    }

    // Validator Email

    const email = document.getElementById("Email").value;
    if (state === "") {
      showError("Email", "Please enter an email address.");
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailPattern.test(email)) {
        showError("Email", "Please enter a valid email address.");
      }
    } else {
      clearError("Email");
    }

    // Validator self-description
    const description = document.getElementById("subject").value.trim();
    if (description === "") {
      showError("subject", "Please write something about yourself you like!");
    } else if (description.length < 10) {
      showError(
        "subject",
        "Please write at least 10 characters about yourself."
      );
    }
  } else {
    clearError("subject");
  }

  // If all validations pass, submit the form
  const hasErrors = document.querySelectorAll(".error").length > 0;
  if (!hasErrors) {
    showSuccessMessage("Form submitted successfully!");
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

function showSuccessMessage(message) {
  // Create a new element for success message
  const successMessage = document.createElement("div");
  successMessage.classList.add(
    "success-message",
    "bg-green-200",
    "text-green-800",
    "p-4",
    "rounded-md",
    "mt-4"
  );
  successMessage.textContent = message;

  const popupContainer = document.getElementById("popup-container");
  popupContainer.innerHTML = "";
  popupContainer.appendChild(successMessage);
}
