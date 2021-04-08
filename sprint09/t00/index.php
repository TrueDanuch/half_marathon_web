<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Registration</title>
    <meta name="description" content="t00. Registration">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <h1>Registration</h1>
    <div class="main">
        <form method="post" action="index.php">
            <div class="input-group">
                <label>Login:</label>
                <input type="text" name="login" value="<?php echo $login; ?>">
            </div>
            <div class="input-group">
                <label>Password:</label>
                <input type="password" name="password" value="<?php echo $password; ?>">
            </div>
            <div class="input-group">
                <label>Confirm Password:</label>
                <input type="password" name="cPassword" value="<?php echo $cPassword; ?>">
            </div>
            <div class="input-group">
                <label>Full Name:</label>
                <input type="text" name="fullName" value="<?php echo $fullName; ?>">
            </div>
            <div class="input-group">
                <label>Email Address:</label>
                <input type="email" name="emailAddress" value="<?php echo $emailAddress; ?>">
            </div>
            <div class="input-group">
                <button type="submit" class="btn" name="reg_user">Register</button>
            </div>
        </form>
    </div>
</body>

</html>