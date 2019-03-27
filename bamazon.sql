DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(65, 2) NOT NULL,
stock_quantity INT(255) NOT NULL,
PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Playstation 4", "Electronics", 300, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Xbox 360", "Electronics", 250, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Nintendo switch", "Electronics", 250, 25);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Anna Karennina", "Books", 20, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Leather wallet", "Accessories", 40, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("MAC lipstick", "Cosmetics", 20, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Cardi B CD", "Muisc", 13.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUE("Black Shirts", "Clothes", 12.50, 300);

SELECT * FROM products