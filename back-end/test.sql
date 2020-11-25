CREATE DATABASE project;

USE project;


테이블 생성 - 회원 정보 테이블
CREATE TABLE IF NOT EXISTS users(
          id VARCHAR(45) NOT NULL, --학번
          name VARCHAR(45) NOT NULL, --이름
          password VARCHAR(45) NOT NULL, --비밀번호
          state VARCHAR(45) NOT NULL, --학적 상태
          dept VARCHAR(45) NOT NULL, --전공
          msg VARCHAR(45) NOT NULL, --한 줄 소개
          PRIMARY KEY (id));

전체 회원 조회
SELECT * from users

이미 존재하는 회원인지 조회 => 1이면 존재, 0이면 없음
SELECT count(*)  cnt from users where id=? and password=?


회원 가입
INSERT INTO users (id, name, password, state, dept, msg) VALUES (?, ?, ?, ?, ?, ?)



테이블 생성 - 회원 경력 테이블
CREATE TABLE IF NOT EXISTS user(
          id VARCHAR(45) NOT NULL, --학번
          name VARCHAR(45) NOT NULL, --이름
          career VARCHAR(100) DEFAULT NULL, --경력
          interest VARCHAR(100) DEFAULT NULL, --관심 분야
          activity VARCHAR(100) DEFAULT NULL, -- 대외 활동
          ability VARCHAR(100) DEFAULT NULL, --자격증
          PRIMARY KEY (id));