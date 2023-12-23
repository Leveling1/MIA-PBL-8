document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var userName = document.querySelector('input[name="user_name"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var errorText = document.querySelector('.error_text');

    if (userName === 'Nexus fusion 2') {
        if (password === 'nexusfusion') {
            window.location.href = '/home.html'; // Redirige vers home.html
        } else {
            errorText.textContent = 'Erreur : Le mot de passe est incorrect.';
            errorText.style.display = "block";
        }
    } else {
        errorText.textContent = 'Erreur : Le nom d\'utilisateur est incorrect.';
        errorText.style.display = "block";
    }
});
