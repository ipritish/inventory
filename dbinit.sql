DROP DATABASE IF EXISTS inventory;
FLUSH PRIVILEGES;
SHOW DATABASES;
CREATE DATABASE inventory;
USE inventory;
create table animes (id int AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, rating double NOT NULL, season int NOT NULL, episodes int NOT NULL, running boolean NOT NULL, air_day varchar(255), my_rating double NOT NULL ,PRIMARY KEY (id));
create table shows (id int AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, rating double NOT NULL, season int NOT NULL, episodes int NOT NULL, running boolean NOT NULL, air_day varchar(255), my_rating double NOT NULL , PRIMARY KEY (id));
SHOW tables;