CREATE DATABASE project;


테이블 생성
CREATE TABLE IF NOT EXISTS users(
     id VARCHAR(45) NOT NULL,
     name VARCHAR(45) NOT NULL,
     password VARCHAR(45) NOT NULL,
     state VARCHAR(45) NOT NULL,
     PRIMARY KEY (id));


전체 회원 조회
SELECT * from users