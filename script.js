// HOLD YOUR BREATH
//
let clickCount = 0; 

document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname === '/register.html') {

        if (localStorage.getItem('gameCompleted') === 'true') {
            document.body.innerHTML =
                `<div class="container">
                <h1>Signature</h1>
                <form id="rgstr_form" action="register" method="POST">
                    <label for="username">Nom d'esprit:</label>
                    <input type="text" id="username" name="username" required>
                    
                    <label for="password">Signature:</label>
                    <input type="password" id="password" name="password" required>
                    
                    <label for="password">Yubaba déteste les tricheurs...<br>
                     Signe à nouveau:</label>
                    <input type="password" id="password_confirm" name="password" required>
                    
                    <button type="submit" id="rgstr_btn">Entrer dans les bains</button>
                </form>
                </div>`;
        }

        else {
        document.body.innerHTML =
        `<div class="container">
        <h2>Bienvenue</h2>
        <p>Pour travailler aux bains et découvrir mon film préféré, tu dois traverser le pont et signer ton contrat avec Yubaba.</p>
        <button id="enter_btn">Traverser le pont</button>
        </div>`;

        document.querySelector('#enter_btn').addEventListener('click', function() {
            document.body.innerHTML =
            `<div class="container">
            <p>Mais attends... Tu es humain ! <br> 
            Seuls les esprits sont autorisés à travailler dans la maison des bains. <br>
            Vite, retiens ta respiration pour passer inaperçu !</p>
            <button id="hold_btn">Retenir ta respiration</button>
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
                    <p>Pfiou ! Tu as réussi à traverser sans te faire repérer… Respire doucement, mais ne relâche pas totalement ta vigilance. Yubaba t’attend pour signer ton contrat.</p>
                    </div>`; 

                    localStorage.setItem('gameCompleted', 'true'); 

                    const register_btn = document.createElement("button");
                    register_btn.textContent = "Signer le contrat de Yubaba";
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
        alert("Yubaba n'accepte que les contrats signés correctement. Assure-toi que ta signature correspond !");
        return;
    }

    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('password', JSON.stringify(password));

    if (username.value == '' || password.value == '' || password_confirm.value == '') {
        alert('Remplis bien tous les champs.');
    } else {
        alert('Contrat signé !');
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
            alert('Identité confirmée. Bienvenue dans la maison des bains !');
            window.location.href = 'index.html';
        } else {
            alert('Le gardien des bains examine ton contrat… Hum, quelque chose ne colle pas. Vérifie ton identité et réessaie !');
        }
    } else {
        alert('Aucun esprit reconnu… Ton contrat n’apparaît pas dans les registres de Yubaba.');
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
        `<div class="container">
        <h1>Accès restreint</h1>
        <p>Tu n’es pas inscrit sur la liste des travailleurs des bains. Yubaba ne tolère pas les intrus… <br>
        Si tu veux éviter de finir en cochon, tu ferais mieux de signer un contrat immédiatement.</p>
        <button id="redirect_rgstr_btn">Signer le contrat</button>
        </div>`;
    }

    // bouton de redirection
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
    alert('Tu sors de la maison des bains !');
    window.location.href = 'login.html';
}
