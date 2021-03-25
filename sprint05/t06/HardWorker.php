<?php
class HardWorker{
    private $name;
    private $age;
    private $salary;
    
    function setName($string){
        $this->name = $string;
    }
    
    function getName(){
        return $this->name;
    }
    
    function setAge($int){
        if($int <= 100 && $int >= 1){
            $this->age = $int;
            return true;
        }
        else {
            return false;
        }
    }
    
    function getAge(){
        return $this->age;
    }
    
    function setSalary($int){
        if($int <= 10000 && $int >= 100){
            $this->salary = $int;
            return true;
        }
        else {
            return false;
        }
    }
    
    function getSalary(){
        return $this->salary;
    }
    
    function toArray(){
        $array = ["name" => $this->name, "age" => $this->age, "salary" => $this->salary];
        return $array;
    }
}
?>