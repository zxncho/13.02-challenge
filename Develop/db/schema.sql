
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
id INT NOT NULL,
category_name VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
id INT NOT NULL,
product_name VARCHAR(50) NOT NULL,
price FLOAT NOT NULL,
stock INT NOT NULL,
category_id INT NOT NULL
);

CREATE TABLE ProductTag (
id INT NOT NULL,
product_id INT NOT NULL,
tag_id INT NOT NULL
);

CREATE TABLE Tag (
id INT NOT NULL,
tag_name VARCHAR(50) NOT NULL
);

