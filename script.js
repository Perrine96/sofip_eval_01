// HOLD YOUR BREATH
//
let clickCount = 0; 

document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname === '/register.html') {

        if (localStorage.getItem('gameCompleted') === 'true') {
            document.body.innerHTML =
                `<div class="container">
                <h1>Inscription</h1>
                <form id="rgstr_form" action="register" method="POST">
                    <label for="username">Pseudo:</label>
                    <input type="text" id="username" name="username" required>
                    
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required>
                    
                    <label for="password">Confirmez le mot de passe:</label>
                    <input type="password" id="password_confirm" name="password" required>
                    
                    <button type="submit" id="rgstr_btn">S'inscrire</button>
                </form>
                </div>`;
        }

        else {
        document.body.innerHTML =
        `<div class="container">
        <h2>Bienvenue</h2>
        <p>Traverse le pont pour découvrir mon film préféré.</p>
        <button id="enter_btn">Traverser</button>
        </div>`;

        document.querySelector('#enter_btn').addEventListener('click', function() {
            document.body.innerHTML =
            `<div class="container">
            <p>Mais attends... Tu es humain ! <br> 
            Les humains ne sont pas autorisés au Royaume des Esprits <br>
            Vite, retiens ta respiration pour passer inaperçu !!!</p>
            <button id="hold_btn">Retenir sa respiration</button>
            <p id="message"></p>
            </div>`; 

            const hold_btn = document.querySelector('#hold_btn');

            hold_btn.addEventListener('click', function() {
                clickCount++; 
                console.log(clickCount); 

                const message = document.querySelector('#message');

                if (clickCount === 1) {
                    message.textContent = "C'est ça, continue !";
                } else if (clickCount === 2) {
                    message.textContent = "Fais attention, les esprits t'observent...";
                } else if (clickCount === 3) {
                    message.textContent = "Aller, encore un petit effort...";
                } else if (clickCount === 4) {
                    message.textContent = "Tiens bon !";
                } else if (clickCount === 5) {
                    message.textContent = "Presque invisible, continue comme ça...";
                } else if (clickCount === 6) {
                    message.textContent = "T'y es presque...";
                } else if (clickCount === 7) { 
                    document.body.innerHTML = 
                    `<div class="container">
                    <p>Pfiou ! Ça y est, tu as traversé. Respire !</p>
                    </div>`; 

                    localStorage.setItem('gameCompleted', 'true'); 

                    const register_btn = document.createElement("button");
                    register_btn.textContent = "Accéder à l'inscription";
                    register_btn.id = "register_btn"; 

                    const container = document.querySelector('.container');
                    container.appendChild(register_btn);

                    register_btn.addEventListener("click", function() {
                        window.location.href = "register.html";
                    });
                }
            });
        });
    }
    }
});


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
        <button id="redirect_rgstr_btn">S'inscrire</button>`;
    }

    // boutons de redirection
    document.querySelector('#redirect_rgstr_btn').addEventListener('click', function() {
        window.location.href = 'register.html';
    });
    }
});


// SCROLL TO 
//
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('.main');
    const scrollToMain = document.querySelector('#scrollToMain');

    scrollToMain.addEventListener('click', function() {
        main.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'start',
            }
        );

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
    alert('Déconnexion réussie !');
    window.location.href = 'login.html';
}
