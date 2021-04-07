<?php

abstract class Model
{
    protected $connection;
    protected $table;

    public function __construct($table)
    {
        $this->setConnection();
        $this->setTable($table);
    }

    protected function setTable($table)
    {
        $this->table = $table;
    }

    protected function setConnection()
    {
        $this->connection = new DatabaseConnection("127.0.0.1", null, "dyurchenko", "my_sqli_native_password", "ucode_web");
    }

    abstract public function find($id);
    abstract public function delete();
    abstract public function save();
}
?>