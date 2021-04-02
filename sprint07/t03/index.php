<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Charset</title>
    <meta name="description" content="t03. Charset">
</head>

<body>
    <h1>Charset</h1>
    <div class="main">
    <form action="index.php" method="post">
        <span>Change charset:</span>
        <input type="text" name="inString" placeholder="Input string"><br><br>
        
        <span>Select charset or several charsets:</span>
        <select size="3" multiple name="charsets[]">
            <option>UTF-8</option>
            <option>ISO-8859-1</option>
            <option>Windows-1252</option>
        </select>
        <input name="change" type="submit" value="Change charset">
        <input name="clear" type="submit" value="Clear"><br>
    </form>

        <?php
          if(isset($_POST['change'])) {
              $_SESSION['inString'] = $_POST['inString'];
              $i = 0;
              while($_POST['charsets'][$i]) {
                  utf8_encode($_SESSION['inString']);
                  if($i == 0) {
                      echo 'Input string' . '<textarea rows="2" cols="25">' . $_SESSION['inString'] . '</textarea><br>';
                  }
                  if($_POST['charsets'][$i]) {
                      echo $_POST['charsets'][$i] . '<textarea rows="2" cols="25">';
                      if($i == 0)
                          echo $_SESSION['inString'];
                      else if($i == 1)
                          echo iconv('UTF-8', 'ISO-8859-1//TRANSLIT', $_SESSION['inString']);
                      else if($i == 2)
                          echo iconv('UTF-8', 'Windows-1252', $_SESSION['inString']);
                      echo '</textarea><br>';
                  }
                  $i++;
              }
          }
      ?>
    </div>
</body>
</html>