<?php

class DatabaseConnection {

    public $connection;

    public function __construct($host, $username, $password, $database){
        $this->connection = mysqli_connect($host, $username, $password, $database);
    }

    public function __destruct(){
        if ($this->connection){
            mysqli_close($this->connection);
        }
    }

    public function getConnectionStatus(){
        return ($this->connection) ? true : false;
    }
}
?>