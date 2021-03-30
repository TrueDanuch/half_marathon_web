<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Normal space</title>
</head>

<body>
<?php
	function calculate_time(){
        $past = new DateTime("1939-01-01");
        $cur = new DateTime("now");
        $res = $past->diff($cur);
        return $res;
    }

	$time = calculate_time();
    echo "In real life you were absent for " . $time->format("%Y") . " years, " . $time->format("%m") . " months, " . $time->format("%d") . " days\n";
?>
</body>

</html>
