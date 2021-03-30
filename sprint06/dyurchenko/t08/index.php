<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>What about forms?</title>
    <meta name="description" content="t08. What about forms?">
</head>

<body>
    <div class="main">
        <h1>What Thanos did for the Soul Stone?</h1>
        <form method="POST">
            <div><input id="1" type="radio" name="option" value="false">Jumped from the mountain</div><br>
            <div><input id="2" type="radio" name="option" value="false">made stone keeper to jump from the mountain</div><br>
            <div><input id="3" type="radio" name="option" value="true">Pushed Gamora off the mountain</div><br>
            <button type="submit">I made a choice!</button><br>
            <p id='answer'></p>
        </form>
        <?php
            if(isset($_POST["option"])) 
            { 
                if($_POST["option"] == "true") {
                    echo "Correct!";
                }
                else {
                    echo "Shame on you! Go and watch Avengers!";
                }
            }
        ?>
    </div>
</body>

</html>