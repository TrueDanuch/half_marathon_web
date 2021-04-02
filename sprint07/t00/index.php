<?php
    if ($_COOKIE["counter"]) {
        setcookie("counter", $_COOKIE["counter"] + 1, $_COOKIE["expirationTime"] + 60);
    } 
    else {
        setcookie("counter", 1, time() + 60);
        setcookie("expirationTime", time(), time() + 60);
        echo $_COOKIE["counter"];
    }
    $counter = $_COOKIE["counter"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Cookie counter</title>
    <meta name="description" content="t00. Cookie counter">
    
</head>

<body>
    <div class="main">
        <h1>Cookie counter</h1>

        <span>This page was loaded </span>
        <?php echo "<b>$counter</b>"; ?>
        <span> time(s) in last minute</span>
    </div>
</body>

</html>