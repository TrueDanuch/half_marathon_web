<?php
    session_start();
    require_once("connection/DatabaseConnection.php");
    require_once("models/Model.php");
    $login = null;
    $password = null;

    if (!$_POST){
        if (!$_SESSION["login"]){
            echo(file_get_contents("main.html"));
            die();
        } else {
            $login = $_SESSION["login"];
            $password = $_SESSION["password"];
        }
    }

    if ($_POST["logout"]){
        unset($_SESSION["login"]);
        unset($_SESSION["password"]);
        echo(file_get_contents("main.html"));
        session_destroy();
        die();
    }

    $User = new Model();
    if (!$login){
        $login = $_POST["login"];
    }

    if (!$password){
        $password = md5($_POST["password"]);
    }

    if (!$User->checkLogin($login, $password)){
        echo(file_get_contents("main.html"));
        echo("<script>alert('Login or password is wrong!')</script>");
        die();
    }

    $_SESSION["login"] = $login;
    $_SESSION["password"] = $password;
    echo("<script>alert('You have sign in successfully!')</script>");
    echo("Login: ".$User->login.
    "<br>Full name: ".$User->full_name.
    "<br>Email: ".$User->email);
    echo("<form action='login.php' method='POST'><input type='text' name='logout' value='1' style='display:none;'><input type='submit' value='Log out'></form>")
?>