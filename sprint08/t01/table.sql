USE ucode_web;
CREATE TABLE IF NOT EXISTS heroes (
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    race VARCHAR(255) NOT NULL DEFAULT 'human',
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL
);
ALTER TABLE heroes AUTO_INCREMENT=1;