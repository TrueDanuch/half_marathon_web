CREATE DATABASE ucode_web;
CREATE USER 'dyurchenko'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'dyurchenko'@'localhost';
FLUSH PRIVILEGES;