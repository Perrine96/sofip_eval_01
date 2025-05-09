// INSCRIPTION
// 
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
});


// CONNEXION
// 
document.addEventListener('DOMContentLoaded', function() {

const login_form = document.querySelector('#login_form');

login_form.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.querySelector('#login_username').value;
    let password = document.querySelector('#login_password').value;
    
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    
    if (storedUsername && storedPassword) {
        if (username === JSON.parse(storedUsername) && password === JSON.parse(storedPassword)) {
            alert('Connexion réussie !');
            window.location.href = 'index.html';
        } else {
            alert('Pseudo ou mot de passe invalide, veuillez réessayer.');
        }
    } else {
        alert('Aucun utilisateur enregistré. Veuillez vous inscrire.');
    }
});
});


// ACCES RESTREINT INDEX
// 
document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname === '/index.html') {

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (!username || !password) {
        document.body.innerHTML = 
        `<h2>Accès restreint</h2>
        <p>Vous devez être inscrit pour accéder à cette page.</p>
        <button id="redirect_rgstr_btn">S'inscrire</button>
        <button id="redirect_login_btn">Se connecter</button>`;
    }

    // boutons de redirection
    document.querySelector('#redirect_rgstr_btn').addEventListener('click', function() {
        window.location.href = 'register.html';
    });

    document.querySelector('#redirect_login_btn').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    }
});


// HOLD YOUR BREATH
//
document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname === '/register.html') {

    document.body.innerHTML =
    `<h2>Inscription</h2>
    <p>Tu vas maintenant entrer le royaume des esprits.</p>
    <button id="enter_btn">Entrer</button>`;

    const enter_btn = document.querySelector('#enter_btn');

    document.querySelector('#enter_btn').addEventListener('click', function() {
        document.body.innerHTML =
        `<p>Mais attend ! Tu es humain ! Les esprits vont te démasquer, vite retiens ta respiration !!!</p>
        <button id="hold_btn">Retenir sa respiration</button>`;
    });

    const hold_btn = document.querySelector('#hold_btn');

    hold_btn.addEventListener('click', function() {
        
    });
    }
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
    alert('Déconnexion réussie !');
    window.location.href = 'login.html';
}
