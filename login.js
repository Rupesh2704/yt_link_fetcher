function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation as needed)
    if (email && password) {
        // Store email in localStorage
        localStorage.setItem('userEmail', email);
        
        // Redirect to index.html
        window.location.href = 'land.html';
    } else {
        alert('Please enter both email and password.');
    }
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation as needed)
    if (email && password) {
        // Store email in localStorage
        localStorage.setItem('userEmail', email);
        
        // Redirect to index.html
        window.location.href = 'land.html';
    } else {
        alert('Please enter both email and password.');
    }
}

