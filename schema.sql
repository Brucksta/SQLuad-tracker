DROP DATABASE IF EXISTS `sqluad_trackerdb`;

CREATE DATABASE `sqluad_trackerdb`;

USE `sqluad_trackerdb`;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,

    departmentName VARCHAR(30),

    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,

    title VARCHAR(30) NOT NULL,

    salary DECIMAL,

    department_id INT,

    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,

    first_name VARCHAR(30) NOT NULL,

    last_name VARCHAR(30) NOT NULL,

    role_id INT,

    manager_id INT,

    PRIMARY KEY (id)
);