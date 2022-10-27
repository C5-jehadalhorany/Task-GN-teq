DROP DATABASE gnteq;

CREATE DATABASE gnteq;

USE gnteq;

CREATE TABLE user(
    id INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255),
    Mobile VARCHAR(255),
    Email VARCHAR(255),
    Country VARCHAR(255),
    City VARCHAR(255),
    Date_of_Birth(DATE),
    Contract_Start_Date(DATA),
    Contract_End_Date(DATA),
    Status VARCHAR(255),
);