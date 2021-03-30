<?php
class Ingestion{
    public $id = 0;
    public $meal_type = ["breakfast", "lunch", "dinner"];
    public $day_of_diet;
    public $products = array();

    public function __construct($meal_type, $day_of_diet){
        $this->day_of_diet = $day_of_diet;
        $in_arr = false;
        for($i = 0; $i < count($this->meal_type); $i++){
            if($this->meal_type[$i] == $meal_type){
                $in_arr = true;
                break;
            }
        }
        if(!$in_arr){
            echo "Incorrect meal type!\n";
        }
    }

    public function get_from_fridge($product){
      if($this->products[$product]->getKcal()>200){
        throw new EatException("No more junk food, dumpling");
      }
    }

    public function setProduct($product){
      $this->products[$product->name] = $product;
    }

    public function getProducts(){
      return $this->products;
    }
}
?>