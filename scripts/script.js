// ✨✨ LOCAL STORAGE ✨✨
// Functie om de localStorage op te slaan
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

// error berichtjes
function validateInput(input) {
    const name = input.name;
    const value = input.value.trim();

    if (!value) return "Dit veld is verplicht.";

    if (name === "voorletter" || name === "voorletter-1d") {
        const pattern = /^[A-Z](\.[A-Z])*$/;
        if (!pattern.test(value)) return "Voorletters: Alleen hoofdletters met punten toegestaan (bv. A.R.W)";
    }

    if (input.classList.contains("bsn")) {
        const bsnPattern = /^\d{9}$/;
        if (!bsnPattern.test(value)) return "BSN moet exact 9 cijfers bevatten.";
    }

    if (name === "protocolnummer") {
        const numberPattern = /^\d+$/;
        if (!numberPattern.test(value)) return "Protocolnummer mag alleen cijfers bevatten.";
    }

    if (name === "achternaam-1d") {
        if (!value.match(/^[A-Za-zÀ-ÿ\-'\s]+$/)) return "Achternaam bevat ongeldige tekens.";
    }

    if (name === "tussenvoegsel-1d") {
        if (!value.match(/^[A-Za-zÀ-ÿ'\s\-]*$/)) return "Tussenvoegsel bevat ongeldige tekens.";
    }

    if (name === "vestigingsplaats") {
        if (!value.match(/^[A-Za-zÀ-ÿ'\-\s]+$/)) return "Vestigingsplaats bevat ongeldige tekens.";
    }

    if (name === "testament-datum") {
        const today = new Date().toISOString().split("T")[0];
        if (value > today) return "Datum mag niet in de toekomst liggen.";
    }

    if (name === "waarde-fruchtgebruik") {
        const num = parseFloat(value.replace(",", "."));
        if (isNaN(num) || num <= 0) return "Voer een geldige waarde in voor het vruchtgebruik.";
    }

    if (name === "naam-partner") {
        if (!/^[A-Za-zÀ-ÿ\s'\-]+$/.test(value)) return "Naam van de partner bevat ongeldige tekens.";
    }

    return null;
}


// verberg error
function showError(input) {
    const message = validateInput(input);
    let errorEl = input.parentElement.querySelector(".error-message");

    if (!errorEl) {
        errorEl = document.createElement("div");
        errorEl.className = "error-message";
        input.parentElement.appendChild(errorEl);
    }

    if (message) {
        errorEl.textContent = message;
        errorEl.style.opacity = "1";
        input.classList.add("input-error");
        input.classList.remove("input-valid");
    } else {
        errorEl.textContent = "";
        errorEl.style.opacity = "0";
        input.classList.remove("input-error");
        input.classList.add("input-valid");
    }
}

// Datum validatie
const today = new Date().toISOString().split("T")[0];

document.querySelectorAll(".start_date").forEach(input => {
    input.max = today;
});


// ✨✨ CAROUSEL SLIDER ✨✨
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const fieldsets = document.querySelectorAll('.main-fieldset');
let currentIndex = 0;

// Laat alleen de eerste fieldset zien, verberg de rest via JS (pas nu!)
fieldsets.forEach((fieldset, index) => {
    fieldset.style.display = index === currentIndex ? "block" : "none";
});

// Verberg de overige fieldsets
fieldsets.forEach((fieldset, index) => {
    if (index !== currentIndex) {
        fieldset.style.display = "none";
    }
});

// Volgende knop (swipe naar de volgende fieldset)
nextButton.addEventListener('click', () => {
    if (currentIndex < fieldsets.length - 1) {
        fieldsets[currentIndex].style.display = "none";  // Verberg de huidige fieldset
        currentIndex++;  // Verhoog de index
        fieldsets[currentIndex].style.display = "block";
        nextButton.style.display = "none";
        prevButton.style.display = "block";  // Toon de volgende fieldset
    }
});

// Vorige knop (swipe naar de vorige fieldset)
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        fieldsets[currentIndex].style.display = "none";  // Verberg de huidige fieldset
        currentIndex--;  // Verlaag de index
        fieldsets[currentIndex].style.display = "block";
        prevButton.style.display = "none"; 
        nextButton.style.display = "block";
          // Toon de vorige fieldset
    }
    
});


// ✨✨ POP UP ✨✨
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('popupTrigger');
    const popup = document.getElementById('popupText');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeModal');

closeButton.addEventListener('click', () => {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
});

  
    // Open popup
    trigger.addEventListener('click', () => {
      popup.classList.remove('hidden');
      overlay.classList.remove('hidden');
    });
  
    // Sluit popup bij klikken buiten de modal
    overlay.addEventListener('click', () => {
      popup.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  
    // Optioneel: sluiten met Escape-toets
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
      }
    });
  });
  