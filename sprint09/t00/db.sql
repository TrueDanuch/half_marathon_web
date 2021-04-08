CREATE DATABASE sword;
USE sword;
CREATE TABLE IF NOT EXISTS users(
    login VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    full_name TEXT NOT NULL,
    email_address TEXT NOT NULL
);