<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Hack it!</title>
    <meta name="description" content="t02. Hack it!">
</head>

<body>
    <h1>Password</h1>
    <div class="main">
    <?php
        if (!$_POST || $_POST["reset_session"]) {
            $_SESSION = array();
            echo '
                <form action="index.php" method="post">
                    <span>Password not saved at session.</span><br>
                    <span>Password for saving to session</span>
                    <input type="text" name="password" placeholder="Password to session"><br>
                    <span>Salt for saving to session</span>
                    <input type="text" name="salt" placeholder="Salt to session"><br>
                    <input type="submit" name="save" value="Save">
                </form>
            ';
        }
        else if (!$_POST["check_password"]) {
            $password = $_POST["password"];

            $salt = $_POST["salt"];

            $_SESSION["password"] = $password;
            $_SESSION["salt"] = $salt;
            $_SESSION["hash"] = $hash;
            $options = ['cost' => $salt];

            $hash = md5($password . $salt);

            echo '
                <form action="index.php" method="post">
                    <span>Password saved at session.</span><br>
                    <span>Hash is </span>
            ' 
            . $hash . 
            '
            <br><span>Try to guess</span>
                    <input type="text" name="check_password" placeholder="Password to session">
                    <input type="submit" value ="Check password"><br>
                    <input type="submit" name="reset_session" value="Clear">
                </form>
            ';
        }
        else {
            if ($_POST["check_password"] == $_SESSION["password"]) {
                echo '
                    <form action="index.php" method="post">
                        <span style="color: green;">Hacked!</span><br><br>
                        <span>Password not saved at session.</span><br>
                        <span>Password for saving to session</span>
                        <input type="text" name="password" placeholder="Password to session"><br>
                        <span>Salt for saving to session</span>
                        <input type="text" name="salt" placeholder="Salt to session"><br>
                        <input type="submit" name="save" value="Save">
                    </form>
                ';
            }
            else {
                echo '
                    <form action="index.php" method="post">
                        <span style="color: red;">Access denied!</span><br><br>
                        <span>Password not saved at session.</span><br>
                        <span>Password for saving to session</span>
                        <input type="text" name="password" placeholder="Password to session"><br>
                        <span>Salt for saving to session</span>
                        <input type="text" name="salt" placeholder="Salt to session"><br>
                        <input type="submit" name="save" value="Save">
                    </form>
                ';
            }
        }

        ?>
    </div>
</body>

</html>