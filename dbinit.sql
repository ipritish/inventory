DROP DATABASE IF EXISTS inventory;
FLUSH PRIVILEGES;
SHOW DATABASES;
CREATE DATABASE inventory;
USE inventory;
create table animes (id int AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, rating double NOT NULL, season int NOT NULL, episodes int NOT NULL, running boolean NOT NULL, air_day varchar(255), my_rating double NOT NULL ,PRIMARY KEY (id));
create table shows (id int AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, rating double NOT NULL, season int NOT NULL, episodes int NOT NULL, running boolean NOT NULL, air_day varchar(255), my_rating double NOT NULL , PRIMARY KEY (id));
SHOW tables;
/*test values*/
insert into animes values(1,"Gintama",9.5,3,316,false,"thursday",10.0);
insert into animes values(2,"Naruto",8.5,1,467,true,"thursday",8.0);
insert into shows values(1,"Penny Dreadful",8.3,3,30,false,"Sunday",9.0);
insert into shows values(2,"Game Of Thrones",9.5,6,60,false,"Sunday",10.0);
