CREATE DATABASE IF NOT EXISTS sword;
USE sword;
CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    login VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    full_name VARCHAR(60) NOT NULL,
    email_address VARCHAR(50) NOT NULL,
    admin ENUM('0', '1') NOT NULL DEFAULT '0',
    PRIMARY KEY (id),
    UNIQUE (login),
    UNIQUE (email_address) 
)ENGINE = InnoDB;