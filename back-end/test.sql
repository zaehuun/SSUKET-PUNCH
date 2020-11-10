CREATE DATABASE project;

USE project;


테이블 생성
CREATE TABLE IF NOT EXISTS users(
     id VARCHAR(45) NOT NULL,
     name VARCHAR(45) NOT NULL,
     password VARCHAR(45) NOT NULL,
     state VARCHAR(45) NOT NULL,
     PRIMARY KEY (id));


전체 회원 조회
SELECT * from users

이미 존재하는 회원인지 조회 => 1이면 존재, 0이면 없음
SELECT count(*)  cnt from users where id=? and password=?


회원 가입
INSERT INTO Users (id, name, password, state) VALUES (?, ?, ?, ?)
