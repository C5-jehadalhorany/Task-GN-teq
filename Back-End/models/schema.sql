DROP DATABASE gnteq;

CREATE DATABASE gnteq;

USE gnteq;

CREATE TABLE user(
    id INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255),
    Mobile VARCHAR(255),
    Email VARCHAR(255) NOT NULL UNIQUE,
    Country VARCHAR(255),
    City VARCHAR(255),
    Date_of_Birth VARCHAR(255),
    password VARCHAR(255),
    Contract_Start_Date VARCHAR(255),
    Contract_End_Date VARCHAR(255),
    is_Status VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
