USE `sqluad_trackerdb`;

INSERT INTO department (departmentName) VALUES ("Marketing"), ("IT"), ("Management"), ("Sales"), ("Engineering");

INSERT INTO role (title, salary, department_id) VALUES ("Marketing Manager", 90000, 1), ("Digital Marketer", 50000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
( "john", "doe", 1, null), 
("sally", "person", 2, 1),
("jack", "mcnicol", 2, 1),
( "dyon", "neon", 2, 1);
