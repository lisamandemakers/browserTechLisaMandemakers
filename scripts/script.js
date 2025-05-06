// ✨✨ LOCAL STORAGE ✨✨
// Function to save form data to localStorage
function saveFormData() {
    const inputs = document.querySelectorAll('#acquirer-1 input');
    const formData = {};

    inputs.forEach(input => {
        if (input.type === 'radio') {
            if (input.checked) {
                formData[input.name] = input.id || input.value;
            }
        } else {
            formData[input.name] = input.value;
        }
    });

    localStorage.setItem('acquirer1FormData', JSON.stringify(formData));
}

// Function to load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('acquirer1FormData');
    if (!savedData) return;

    const formData = JSON.parse(savedData);
    const inputs = document.querySelectorAll('#acquirer-1 input');

    inputs.forEach(input => {
        if (input.type === 'radio') {
            if (formData[input.name] === input.id || formData[input.name] === input.value) {
                input.checked = true;
            }
        } else if (input.name in formData) {
            input.value = formData[input.name];
        }
    });
}

// Attach event listeners
function setupFormPersistence() {
    const inputs = document.querySelectorAll('#acquirer-1 input');

    inputs.forEach(input => {
        input.addEventListener('input', saveFormData);
        if (input.type === 'radio') {
            input.addEventListener('change', saveFormData);
        }
    });

    loadFormData();
}

document.addEventListener('DOMContentLoaded', setupFormPersistence);


// ✨✨ VALIDATIE ✨✨
// Extra validatie bij verzenden
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    // HTML5-validatie is al actief. Hier eventueel extra JS-validatie.
    const bsn = form.querySelector('input[name="burgerservicenummer"]');
    if (bsn && !/^\d{9}$/.test(bsn.value)) {
        alert('Het BSN moet uit precies 9 cijfers bestaan.');
        bsn.focus();
        e.preventDefault();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const inputs = form.querySelectorAll("input[required]");
        let isFormValid = true;

        inputs.forEach(input => {
            const error = validateInput(input);
            showError(input, error);

            if (error) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            e.preventDefault(); // voorkom verzenden
        }
    });

    const inputs = document.querySelectorAll("input[required]");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const error = validateInput(input);
            showError(input, error);
        });
    });
});

function validateInput(input) {
    const name = input.name;
    const value = input.value.trim();

    if (!value) return "Dit veld is verplicht.";

    if (name === "voorletter") {
        const pattern = /^[A-Z](\.[A-Z])*$/;
        if (!pattern.test(value)) return "Alleen hoofdletters en punten toegestaan (bv. A.R.W)";
    }

    if (input.classList.contains("bsn")) {
        const bsnPattern = /^\d{9}$/;
        if (!bsnPattern.test(value)) return "BSN moet exact 9 cijfers bevatten";
    }

    return null;
}

function showError(input, message) {
    let errorEl = input.parentElement.querySelector(".error-message");

    if (!errorEl) {
        errorEl = document.createElement("div");
        errorEl.className = "error-message";
        input.parentElement.appendChild(errorEl);
    }

    if (message) {
        errorEl.textContent = message;
        input.classList.add("input-error");
        input.classList.remove("input-valid");
    } else {
        errorEl.textContent = "";
        input.classList.remove("input-error");
        input.classList.add("input-valid");
    }
}
