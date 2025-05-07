let username = document.querySelector('#username');
let password = document.querySelector('#password');


/**
 * 
 * Cette fonction permet de vérifier si le pseudo et le mot de passe sont valides.
 * Si c'est le cas, elle redirige l'utilisateur vers la page de connexion.
 * Sinon, elle affiche un message d'erreur.
 * Elle stocke également le pseudo et le mot de passe dans le localStorage.
 * 
 */
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    if (username.value == '' || password.value == '') {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Inscription réussie !');
        window.location.href = 'login.html';
    }
}


/**
 * 
 * Cette fonction permet de vérifier si le pseudo et le mot de passe correspondent aux valeurs stockées dans le localStorage.
 * Si c'est le cas, elle redirige l'utilisateur vers la page d'accueil.
 * Sinon, elle affiche un message d'erreur.
 * 
 */
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



function access() {
    window.location.href = 'index.html';
    alert('Vous devez vous connecter pour accéder à cette page.');
    // let storedUsername = localStorage.getItem('username');
    // let storedPassword = localStorage.getItem('password');

    // if (username.value == storedUsername && password.value == storedPassword) {
    //     window.location.href = 'index.html';
    // } else {
    //     alert('Vous devez vous connecter pour accéder à cette page.');
    //     window.location.href = 'login.html';
    // }
}



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