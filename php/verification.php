<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $password = htmlspecialchars($_POST['password']);
    $user_name = htmlspecialchars($_POST['user_name']);

    if ($user_name === 'nexus fusion 2') {
        if ($password === 'nexusfusion') {
            echo "success";
        } else {
            echo 'Le mots de passe est incorrect';
        }
    } else {
        echo "Mauvais nom d'utilisateur";
    }
}
