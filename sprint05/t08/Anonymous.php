<?php
class Anonymous{
    private $name;
    private $alias;
    private $affiliation;
    
    public function __construct($name, $alias, $affiliation){
        $this->name = $name;
        $this->alias = $alias;
        $this->affiliation = $affiliation;
    }
    
    public function getName() {
      return $this->name;
    }
    
    public function getAlias() {
      return $this->alias;
    }
    
    public function getAffiliation() {
      return $this->affiliation;
    }
}

function get_anonymous($name, $alias, $affiliation) {
    $anonymous = new Anonymous($name, $alias, $affiliation);
    return $anonymous;
}
?>