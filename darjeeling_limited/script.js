let username = document.querySelector('#username');
let password = document.querySelector('#password');

function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
}

localStorage.getItem('username');
localStorage.getItem('password');

// Vérifier si les données sont celles entrées dans le login
// function check() {
//     let storedUsername = localStorage.getItem('username');
//     let storedPassword = localStorage.getItem('password');
//     if (username.value == storedUsername && password.value == storedPassword) {
//         alert('Connexion réussie !');
//         window.location.href = 'index.html';
//     } else {
//         alert('Pseudo invalide, veuillez réessayer.');
//     }
// }