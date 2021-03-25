<?php declare(strict_types=1);
function checkDivision(int $start = 1, int $end = 60) {
    for($curr = $start; $curr <= $end; $curr++) {
        if($curr % 2 == 0 && $curr % 3 == 0 && $curr % 10 == 0) {
            echo "The number " . $curr . " is divisible by 2, is divisible by 3, is divisible by 10" . "\n";
            continue;
        }
        else if($curr % 2 == 0 && $curr % 3 == 0) {
            echo "The number " . $curr . " is divisible by 2, is divisible by 3" . "\n";
            continue;
        }
        else if($curr % 2 == 0 && $curr % 10 == 0) {
            echo "The number " . $curr . " is divisible by 2, is divisible by 10" . "\n";
            continue;
        }
        else if($curr % 3 == 0 && $curr % 10 == 0) {
            echo "The number " . $curr . " is divisible by 3, is divisible by 10" . "\n";
            continue;
        }
        else if($curr % 2 == 0) {
            echo "The number " . $curr . " is divisible by 2" . "\n";
            continue;
        }
        else if($curr % 3 == 0) {
            echo "The number " . $curr . " is divisible by 3" . "\n";
            continue;
        }
        else if($curr % 10 == 0) {
            echo "The number " . $curr . " is divisible by 10" . "\n";
            continue;
        }
        else {
             echo "The number " . $curr . " -" . "\n";
        }
    }
}
?>