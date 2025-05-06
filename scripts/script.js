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
});