<?php
class Avenger{
    public $name;
    public $alias;
    public $gender;
    public $age;
    public $power;
    public $hp;

    public function __construct($name, $alias, $gender, $age, $power, $hp){
        $this->name=$name;
        $this->alias=$alias;
        $this->gender=$gender;
        $this->age=$age;
        $this->power=$power;
        $this->hp=$hp;
    }

    public function __toString(){
        $str = "name: " .  $this->name . "\ngender: " . $this->gender . "\nage: " . $this->age . "\n";
        return $str;
    }

    public function __invoke(){
        echo strtoupper($this->alias) . "\n";
        for($i = 0; $i < count($this->power); $i++){
            echo $this->power[$i] . "\n";
        }
        echo "\n";
    }
}
?>