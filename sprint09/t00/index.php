<?php
require_once("connection/DatabaseConnection.php");
require_once("model/registration.php");
echo(file_get_contents("index.html"));

if (!$_POST){
    die();
}
    
if ($_POST){
    $login = $_POST["login"];
    $password = $_POST["password"];
    $full_name = $_POST["full_name"];
    $email_address = $_POST["email_address"];

    $Registration = new Registration();
    if ($Registration->checkLogin($login)){
        echo("<script>alert('Such login is already exist')</script>");
        die();
    }

    $Registration->createUser($login, $password, $full_name, $email_address);
    echo("<script>alert('You registered successfully')</script>");
}
?>