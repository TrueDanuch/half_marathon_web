USE ucode_web;
CREATE TABLE IF NOT EXISTS powers (
    id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name VARCHAR(255) NOT NULL,
    points TINYINT(3) NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS races (
    id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS teams (
    id int PRIMARY KEY AUTO_INCREMENT,
    hero_id int NOT NULL,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);
