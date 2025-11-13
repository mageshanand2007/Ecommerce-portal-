// ================================== Modal Functions ==================================

/** Opens the specified modal */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

/** Closes the specified modal */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    resetFormErrors(); // Clear errors when closing
}

/** Switches between Login and Register views */
function switchForm(view) {
    document.getElementById('login-view').style.display = view === 'login' ? 'block' : 'none';
    document.getElementById('register-view').style.display = view === 'register' ? 'block' : 'none';
    resetFormErrors(); // Clear errors when switching
}

/** Resets all error messages */
function resetFormErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(err => {
        err.style.display = 'none';
        err.textContent = '';
    });
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        resetFormErrors();
    }
}


// ================================== 2. Input Field Validation ==================================

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // --- Login Form Validation ---
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default form submission
        let isValid = true;
        resetFormErrors();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Basic Email Check
        if (!validateEmail(email)) {
            document.getElementById('login-email-error').textContent = 'Please enter a valid email address.';
            document.getElementById('login-email-error').style.display = 'block';
            isValid = false;
        }

        // Basic Password Length Check (minlength="6" is also in HTML, but JS adds message)
        if (password.length < 6) {
            document.getElementById('login-password-error').textContent = 'Password must be at least 6 characters.';
            document.getElementById('login-password-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Login Successful! (Simulated)');
            closeModal('login-modal');
            // Here you would typically send data to a backend server (AJAX/Fetch)
        }
    });

    // --- Registration Form Validation ---
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default form submission
        let isValid = true;
        resetFormErrors();

        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        // Name Check
        if (name.trim().length < 2) {
            document.getElementById('reg-name-error').textContent = 'Full name is required.';
            document.getElementById('reg-name-error').style.display = 'block';
            isValid = false;
        }

        // Email Check
        if (!validateEmail(email)) {
            document.getElementById('reg-email-error').textContent = 'Please enter a valid email address.';
            document.getElementById('reg-email-error').style.display = 'block';
            isValid = false;
        }

        // Password Length Check
        if (password.length < 8) {
            document.getElementById('reg-password-error').textContent = 'Password must be at least 8 characters.';
            document.getElementById('reg-password-error').style.display = 'block';
            isValid = false;
        }

        // Password Match Check
        if (password !== confirmPassword) {
            document.getElementById('reg-confirm-password-error').textContent = 'Passwords do not match.';
            document.getElementById('reg-confirm-password-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Registration Successful! (Simulated)');
            closeModal('login-modal');
            // Here you would typically send data to a backend server (AJAX/Fetch)
        }
    });
});

/** Helper function for email regex validation */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}