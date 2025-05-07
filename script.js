document.addEventListener('DOMContentLoaded', function() {

const rgstr_form = document.querySelector('#rgstr_form');

rgstr_form.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let password_confirm = document.querySelector('#password_confirm').value;

    if (password !== password_confirm) {
        alert('Les mots de passe doivent correspondre.');
        return;
    }

    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('password', JSON.stringify(password));

    if (username.value == '' || password.value == '' || password_confirm.value == '') {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Inscription réussie !');
        window.location.href = 'login.html';
    }
});


const login_form = document.querySelector('#login_form');

login_form.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    
    if (username == JSON.parse(storedUsername) && password == JSON.parse(storedPassword)) {
        alert('Connexion réussie !');
        window.location.href = 'index.html';
    } else {
        alert('Pseudo ou mot de passe invalide, veuillez réessayer.');
    }
});
});




// FONCTIONS DE REDIRECTION
// 
function returnToRegister() {
    window.location.href = 'register.html';
}

function returnToLogin() {
    window.location.href = 'login.html';
}

function logout() {
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
    alert('Déconnexion réussie !');
    window.location.href = 'login.html';
}
