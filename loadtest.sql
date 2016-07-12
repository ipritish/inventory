USE inventory;
DROP PROCEDURE IF EXISTS test_data;
DELIMITER $$
CREATE PROCEDURE test_data()
BEGIN
  DECLARE i INT DEFAULT 3;

  WHILE i < 100 DO
    INSERT INTO animes (name,rating,season,episodes,running,air_day,my_rating)
    SELECT name,rating,season,episodes,running,air_day,my_rating FROM animes WHERE id = 1;
    INSERT INTO shows (name,rating,season,episodes,running,air_day,my_rating)
    SELECT name,rating,season,episodes,running,air_day,my_rating FROM shows WHERE id = 1;
    SET i = i + 1;
  END WHILE;
END$$
DELIMITER ;
CALL test_data();
DROP PROCEDURE test_data;