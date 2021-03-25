<?php 
function total($addCount, $addPrice, $currentTotal = 0) {
    $result = ($addCount * $addPrice) + $currentTotal;
    return number_format($result, 1, '.', ",");
}
?>