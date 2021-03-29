<?php
class Team {
    public $id;
    public $avengers = array();

    public function __construct($id, $avengers){
        $this->id=$id;
        $this->avengers=$avengers;
    }

    function battle($damage):void{
        for($i = 0; $i < count($this->avengers); $i++){
            $this->avengers[$i]->hp= $this->avengers[$i]->hp-$damage;
        }
    }

    function calculate_losses($clonedTeam):void{
        $count = 0;

        for($i = 0; $i < count($this->avengers); $i++){
            if($clonedTeam->avengers[$i]->hp < 1){
                $count++;
            }
        }
        
        if ($count == 0){
            echo"We haven't lost anyone in this battle!"."\n";
        } 
        else{
            echo "In this battle we lost ".$count." Avenger(s)."."\n";
        }
    }
}
?>