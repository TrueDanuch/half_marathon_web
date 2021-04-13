<?php
    require_once("connection/DatabaseConnection.php");
    require_once("models/Model.php");
    echo(file_get_contents("main.html"));
    if (!$_POST)
        die();
    $Registration = new Model();
    $login = $_POST["login"];
    $password = md5($_POST["password"]);
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    if ($Registration->checkLogin($login, $password)) {
        echo("<script>alert('Such login is already exist')</script>");
        die();
    }
    $Registration->createUser($login, $password, $full_name, $email);
    echo("<script>alert('You registered successfully')</script>");
?>