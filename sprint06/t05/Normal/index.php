<?php
namespace Space\Normal;

function calculate_time(){
    $past = new DateTime("1939-01-01");
    $cur = new DateTime("now");
    $res = $past->diff($cur);
    return $res;
}
?>