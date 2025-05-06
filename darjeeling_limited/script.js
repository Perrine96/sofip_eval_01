let username = document.querySelector('#username');
let password = document.querySelector('#password');

function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    if (username.value == '' || password.value == '') {
        alert('Veuillez remplir tous les champs.');
        return false;
    } else {
        alert('Inscription réussie !');
        window.location.href = 'login.html';
    }
}

function check() {
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    if (username.value == storedUsername && password.value == storedPassword) {
        alert('Connexion réussie !');
        window.location.href = 'index.html';
    } else {
        alert('Pseudo ou mot de passe invalide, veuillez réessayer.');
        document.getElementById("login-form").reset();
    }
}


function returnToRegister() {
    window.location.href = 'register.html';
}

function returnToLogin() {
    window.location.href = 'login.html';
}