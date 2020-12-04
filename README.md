# SSUKET-PUNCH 🚀
IT 인맥을 연결해주는 [로켓펀치](https://www.rocketpunch.com/)에서 영감을 얻어 제작하게 된 학교 내 비즈니스 네트워크 형성 플랫폼 SSUKET-PUNCH 입니다.  
각자 자신의 프로필을 등록하고 서로의 프로필을 확인하여 나에게 맞는 학생을 찾을 수 있습니다.   
이를 통해 공모전 팀 빌딩 및 프로젝트 진행, 더 나아가 선 후배 간 취업 준비에 도움을 주자는 동기로 진행하게 된 프로젝트입니다.   
## 👨‍💻 구성원 및 역할
- **[김재욱](https://github.com/kjwook7522) (프론트 엔드)**   
> 프론트 엔드 작업 환경 세팅   
리액트 컴포넌트 설계 및 구현   
디렉토리 구조 설계   
로그인 및 회원가입 백 엔드 연동   
회원 조회 기능 구현   
회원 조회 시 필터 기능 구현      
회원 정보 수정 기능 구현    

- **[김주영](https://github.com/kjyju3955) (프론트 엔드)**
> 회원 정보 수정 페이지 구조 설계 및 디자인 제작   
회원 정보 페이지 구조 설계 및 디자인 제작   
회원 리스트 페이지 구조 설계 및 디자인 제작   
로그인 페이지 구조 설계 및 디자인 제작   
리액트 페이지 라우팅 설계      
 
- **[김재훈](https://github.com/zaehuun) (백 엔드)**
> 백 엔드 작업 환경 세팅   
mysql 연동 및 테이블 설계   
로그인 API   
회원가입 API   
전체 회원 조회 API   
개인 프로필 조회 API   
CORS 처리   
Session Control   

- **[김이주](https://github.com/kimleeju) (백 엔드)**
> API 설계   
프론트, 백 엔드 데이터 통일화   
CORS 모듈 설정   
Session 모듈 설정   
React, Express 1 line 실행 처리
  

## 🛠 기술스택
* HTML
* CSS
* Javascript
* React
* axios
* Node.js
* Express
* express-session
* Mysql


## 🗂 프론트엔드 디렉토리 구조
```
.
├── public
|   ├── index.html
|   └── images
|
└── src
    ├── common
    ├── pages
    |   ├── page components
    |       └── components
    |   ...
    |
    ├── App.js
    └── index.js
```


## 🗂 백엔드 디렉토리 구조
```
.
├── config
|   └── database.js
|
├── routes
|   └── main.js
|
└── app.js
```

## 시작하기
```
git clone https://github.com/zaehuun/WebProject.git
```
```
back-end/test.sql에 있는 쿼리문을 이용하여 mysql에 database table 생성
```
```
cd front-end && npm install
cd back-end && npm install
```
```
npm start
```

## 데모

#### 로그인 페이지

<img width="100%" alt="login" src="https://user-images.githubusercontent.com/29251371/101071780-6944e000-35e0-11eb-8a9e-82003bc0ba8d.png">


#### 회원 찾기 페이지
<img width="100%" alt="member" src="https://user-images.githubusercontent.com/29251371/101071792-6e099400-35e0-11eb-9088-8108dced5e22.png">


#### 회원 정보 수정 페이지
<img width="100%" alt="memberedit" src="https://user-images.githubusercontent.com/29251371/101072648-b07fa080-35e1-11eb-975d-3067b8127cfa.png">

## 🎥시연 영상
[유튜브 링크](https://youtu.be/6sgTFv4BzbU)
