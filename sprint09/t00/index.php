<?php
$link = mysqli_connect('127.0.0.1', 'dyurchenko', 'securepass', 'sword');

    if($_POST){
        $login = $_POST["login"];
        $password = $_POST["password"];
        $fullName = $_POST["fullName"];
        $emailAddress = $_POST["emailAddress"];

        $sql = "INSERT INTO users (login, password, full_name, email_address) VALUES ('$login', '$password', '$fullName', '$emailAddress');";
        
        $result = mysqli_query($link, $sql);

        if ($result == false) {
            echo "Я даун";
        }
    }

?> 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Registration</title>
    <meta name="description" content="t00. Registration">
    <link type="text/css" href="style.css" rel="stylesheet">
</head>

<body>
    <h1>Registration</h1>
    <div class="main">
        <form method="post" action="index.php">
            <div class="input-group">
                <label>Login:</label>
                <input type="text" name="login" id="login">
            </div>
            <div class="input-group">
                <label>Password:</label>
                <input type="password" name="password">
            </div>
            <div class="input-group">
                <label>Confirm Password:</label>
                <input type="password" name="cPassword">
            </div>
            <div class="input-group">
                <label>Full Name:</label>
                <input type="text" name="fullName">
            </div>
            <div class="input-group">
                <label>Email Address:</label>
                <input type="email" name="emailAddress">
            </div>
            <div class="input-group">
                <button type="submit" class="btn" name="reg_user">Register</button>
            </div>
        </form>
    </div>
</body>

</html>