<?php
class Overload{
    private $data = [];
    
    public function __set($name, $value){
      $this->data[$name] = $value;
    }
    
    public function __get($name) {
      if (array_key_exists($name, $this->data)){
        return $this->data[$name];
      }
      else {
        return "NO DATA";
      }
    }
    
    public function __isset($name){
      if (array_key_exists($name, $this->data)){
        return isset($this->data[$name]);
      }
      else {
        return $this->data[$name] = "NOT SET";
      }
    }
    
    public function __unset($name){
      if (array_key_exists($name, $this->data)){
        unset($this->data[$name]);
      }
      else {
        $this->data[$name] = NULL;
      }
    }
}
?>