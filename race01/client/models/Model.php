<?php
class Model {
    public $login;
    public $password;

    public function setConnection(){
        $this->db_connection = new DatabaseConnection('127.0.0.1', null, "dyurchenko", "securepass", "cardgame");
        $this->connection = $this->db_connection->connection;
    }

    public function __construct(){
        $this->setConnection();
        $this->connection->commit();
    }

    public function createUser($login, $password){
        $this->login = $login;
        $this->password = $password;

        $query = "INSERT INTO `users` (login, password)
        VALUES ('".$this->connection->escape_string($this->login)."',
        '".$this->connection->escape_string($this->password)."')";
        $this->connection->query($query);
        $this->connection->commit();
    }
}
?>