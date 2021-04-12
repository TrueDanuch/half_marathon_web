<?php
    require_once("connection/DatabaseConnection.php");
    require_once("models/Model.php");
    if (!$_POST) {
        echo(file_get_contents("main.html"));
        die();
    }
    $Reminder = new Model();
    $email = $_POST["email"];

    $id = $Reminder->checkEmail($email);
    if (!$id) {
        echo(file_get_contents("main.html"));
        echo("<script>alert('There is not such email in our DB!')</script>");
        die();
    }
    function randomPassword() {
      $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
      $pass = array();
      $alphaLength = strlen($alphabet) - 1;
      for ($i = 0; $i < 8; $i++) {
          $n = rand(0, $alphaLength);
          $pass[] = $alphabet[$n];
      }
      return implode($pass);
    }
    $Reminder->findById($id);
    $newPass = randomPassword();
    $Reminder->password = $newPass;
    $Reminder->updateUser();
    echo("<script>alert('Email has been sent to your email!')</script>");
    mail($email, "Password reminder", "Your new password: \n".$newPass);
?>