USE ucode_web;
CREATE TABLE IF NOT EXISTS powers (
    id int AUTO_INCREMENT,
    hero_id int NOT NULL,
    name TEXT NOT NULL,
    points int NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS races (
    id int AUTO_INCREMENT,
    hero_id int NOT NULL UNIQUE,
    name TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS teams (
    id int AUTO_INCREMENT,
    hero_id int NOT NULL,
    name TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

INSERT INTO powers (hero_id, name, points, type)
VALUES 
(1, "bloody fist", 110, "attack"),
(1, "iron shield", 200, "defense");

INSERT INTO races (hero_id, name)
VALUES 
(1, "Human"),
(2, "Kree");

INSERT INTO teams (hero_id, name)
VALUES 
(1, "Avengers"),
(2, "Hydra");