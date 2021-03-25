<?php
class StrFrequency {

    function __construct($string){
        $this->string = $string;
    }
    
    function letterFrequencies(){
      $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $array = [];
      for($wcount = 0; $wcount < strlen($letters); $wcount++) {
          $count = 0; 
          for($j = 0; $j < strlen($this->string); $j++) {
              if(strtoupper($this->string[$j]) === $letters[$wcount]) {
                  $count++;
              }
          }
          if($count > 0) {
              $array[$letters[$wcount]] = $count;
          }
      }
      return $array;
    }
    
    function wordFrequencies(){
        $string = strtoupper($this->string);
        $words = str_word_count($string, 1);
        $array = [];
        foreach($words as $word) {
            $count = 0;
            foreach($words as $new_word) {
                if($word === $new_word) {
                    $count++;
                }
            }
            $array[$word] = $count;
        }
        return $array;
    }
    
    function reverseString(){
        return strrev($this->string);
    }
}
?>