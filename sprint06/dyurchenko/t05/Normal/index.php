<?php
namespace Space\Normal;
use DateTime;

function calculate_time(){
    $past = new DateTime("1939-01-01");
    $cur = new DateTime("now");
    $res = $past->diff($cur);
    return $res;
}
?>