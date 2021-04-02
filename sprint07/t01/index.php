<?php

if ($_POST) {
    $checkboxes = [
        "curStrength" => $_POST["strength"],
        "curSpeed" => $_POST["speed"],
        "curIntelligence" => $_POST["intelligence"],
        "curTeleportation" => $_POST["teleportation"],
        "curImmortal" => $_POST["immortal"],
        "curAnother" => $_POST["another"],
    ];

    $checkboxesCount = 0;
    foreach ($checkboxes as $checkbox) {
        if ($checkbox == "on") {
            $checkboxesCount++;
        }
    }

    $superheroData = [
        "name" => $_POST["real_name"],
        "curAlias" => $_POST["alias"],
        "age" => $_POST["age"],
        "decription" => $_POST["about"],
        "photo" => $_POST["photo"],
        "experience" => $checkboxesCount,
        "curLevel" => $_POST["level"],
        "purpose" => $_POST["radButton"],
    ];

    echo "<h1>Session for new</h1>";

    echo "name: " . $superheroData["name"] . "<br>";
    echo "alias: " . $superheroData["curAlias"] . "<br>";
    echo "age: " . $superheroData["age"] . "<br>";
    echo "decription: " . $superheroData["decription"] . "<br>";
    echo "photo: " . $superheroData["photo"] . "<br>";
    echo "experience: " . $superheroData["experience"] . "<br>";
    echo "level: " . $superheroData["curLevel"] . "<br>";
    echo "purpose: " . $superheroData["purpose"] . "<br>";

    echo '<br><form>
        <fieldset>
            <input type="submit" value="FORGET">
        </fieldset>
    </form>';

} else {
    echo '

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Session for new</title>
    <meta name="description" content="t01. Session for new">
    
</head>

<body>
    <h1>Session for new</h1>
    <div class="main_form">
        <form name="hero" class="hero" action="index.php" method="post">
            <fieldset>
                <legend>About HERO</legend>
                <p>
                    <label for="real_name">Real Name</label>
                    <input id="real_name" name="real_name" type="text" placeholder="Superhero real name" autofocus>

                    <label for="alias">Current Alias</label>
                    <input id="alias" name="alias" type="text" placeholder="Superhero alias">

                    <label for="age">Age</label>
                    <input id="age" name="age" type="number" step="1" max="999" min="1"><br>
                </p>
                <p>
                    <label for="about">About</label>
                    <textarea id="about" name="about" rows="5" cols="70" maxlength="500"
                                placeholder="Information about the superhero, max 500 symbols"></textarea><br>
                </p>
                <p>
                    <label for="photo">Photo</label>
                    <input id="photo" name="photo" type="file">
                </p>
            </fieldset>

            <fieldset>
                <legend>Powers</legend>
                <p>
                    <input id="strength" name="strength" type="checkbox">
                    <label for="strength">Strength</label>

                    <input id="speed" name="speed" type="checkbox">
                    <label for="speed">Speed</label>

                    <input id="intelligence" name="intelligence" type="checkbox">
                    <label for="intelligence">Intelligence</label>

                    <input id="teleportation" name="teleportation" type="checkbox">
                    <label for="teleportation">Teleportation</label>

                    <input id="immortal" name="immortal" type="checkbox">
                    <label for="immortal">Immortal</label>

                    <input id="another" name="another" type="checkbox">
                    <label for="another">Another</label><br>
                </p>
                <p>
                    <label for="level">Level of control</label>
                    <input id="level" name="level" type="range" step="1" max="10" min="0" value="1">
                </p>
            </fieldset>

            <fieldset>
                <legend>Publicity</legend>
                <p>
                    <input name="radButton" type="radio" value="0">
                    <label for="unknown">UNKNOWN</label>

                    <input name="radButton" type="radio" value="1">
                    <label for="ghost">LIKE A GHOST</label>

                    <input name="radButton" type="radio" value="2">
                    <label for="comics">I AM IN COMICS</label>

                    <input name="radButton" type="radio" value="3">
                    <label for="club">I HAVE FUN CLUB</label>

                    <input name="radButton" type="radio" value="4">
                    <label for="superstar">SUPERSTAR</label><br>
                </p>
            </fieldset>

            <p>
                <input type="reset" value="CLEAR">
                <input type="submit" value="SEND">
            </p>
        </form> 
    </div>
</body>

</html>
';
}
?>