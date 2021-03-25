<?php 
function firstUpper($str):string {
    $str = trim($str, " \t\n\r\0\v");
    $str = ucfirst(strtolower($str));
    return $str;
}
?>