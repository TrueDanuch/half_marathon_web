CREATE DATABASE IF NOT EXISTS cardgame;
CREATE USER IF NOT EXISTS dyurchenko@localhost IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON cardgame.* TO dyurchenko@localhost WITH GRANT OPTION;
USE cardgame;
CREATE TABLE IF NOT EXISTS cardgame.users (
  id INT NOT NULL AUTO_INCREMENT, 
  login VARCHAR(30) NOT NULL, 
  password VARCHAR(32) NOT NULL, 
  full_name VARCHAR(50) NOT NULL, 
  email VARCHAR(50) NOT NULL, 
  PRIMARY KEY (id),
  UNIQUE (login),
  UNIQUE (email) 
) ENGINE = InnoDB;