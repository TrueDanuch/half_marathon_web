<?php

include "LLItem.php"
class LList implements IteratorAggregate{
    private $firstNode;
    private $lastNode;
    private $count;

    function __construct(){
        $this->firstNode = NULL;
        $this->lastNode = NULL;
        $this->count = 0;
    }

    public function insertFirst($data){
        $link = new LLItem($data);
        $link->next = $this->firstNode;
        $this->firstNode = &$link;
        if($this->lastNode == NULL)
            $this->lastNode = &$link;
            $this->count++;
    }

    public function getFirst(){
        return $this->firstNode->data;
    }
    public function getLast(){
        return $this->lastNode->data;
    }
    public function toString(){
        $listData = array();
        $current = $this->firstNode;
        while($current != NULL){
            array_push($listData, $current->readNode());
            $current = $current->next;
        }
        $el=0;
        foreach($listData as $v){
            if($el+1<$this->count){
                    echo $v.", ";
            }
            else {
                echo $v." ";
            }
            $el++;
        }
    }
    public function contains($value){
        $listData = array();
        $current = $this->firstNode;
        $el=0;
        while($current != NULL){
            if ($current->data==$value){
                $el++;
            }
            $current = $current->next;
        }
        if($el>0){
            return 1;
        }
        else return 0;
    }
    

    public function addArr($array){
        foreach ($array as $i => $value) {
            $this->add($array[$i]);
        }
    }

    public function remove($key){
        $current = $this->firstNode;
        $previous = $this->firstNode;

        while($current->data != $key){
            if($current->next == NULL){
                return NULL;
            }
            else{
                $previous = $current;
                $current = $current->next;
            }
        }

        if($current == $this->firstNode){
            if($this->count == 1){
                $this->lastNode = $this->firstNode;
            }
            $this->firstNode = $this->firstNode->next;
        }
        else{
            if($this->lastNode == $current){
                 $this->lastNode = $previous;
             }
            $previous->next = $current->next;
        }
        $this->count--;  
    }

    public function removeAll($val){
        $listData = array();
        $current = $this->firstNode;
        $key=0;
        while($current != NULL){
            if($current->data==$val){
                $this->remove($val);
            }
            $key++;
            $current = $current->next;
        }
    }
    public function clear(){
        $this->firstNode = NULL;
        $this->lastNode = NULL;
        $this->count = 0;
    }
    public function count(){
        return $this->count;
    }

    public function add($NewItem){
        $key=$this->count;
        if($key == 0){
            $this->insertFirst($NewItem);
        }
        else{
            $link = new LLItem($NewItem);
            $current = $this->firstNode;
            $previous = $this->firstNode;

            for($i=0;$i<$key;$i++){       
                $previous = $current;
                $current = $current->next;
            }
            $previous->next = $link;
            $link->next = $current; 
            $this->lastNode=&$link;
            $this->count++;
        }
    }
    
    public function getIterator(){
        $listData = array();
        $current = $this->firstNode;
        while($current != NULL){
            array_push($listData, $current->readNode());
            $current = $current->next;
        }
        return $listData;
    }
}
?>