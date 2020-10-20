var express = require('express');
var bodyParser = require('body-parser'); //for post
var mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = dbconfig.init();
const cors = require('cors');
var app = express();

dbconfig.connect(connection);
//var router = require('./router/main')(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


//html 위치 정의
//app.set('views', __dirname + '/views');
//html 렌더링 할 때 EJS엔진 사용하도록 설정
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
//app.use(express.static('public'));


/*
로그인
학번 : student_id
비밀번호 : st_password
*/
app.post('/login', function(req, res) {
    /*로그인 가능 여부 코드 추가 예정*/
    
    console.log(req.body);
    res.send("hello world");
});


/*
회원가입
이름 : username
학번 : userid
비번 : userpassword
학적st : state
*/
app.post('/join', function(req, res) {
    /*가입 가능 여부 코드 추가 예정*/
    console.log(req.body);
    //res.send(req.body);
});

app.get('/db',function(req,res){
    connection.query('SELECT * from users', (error, rows)=>{
        if (error) throw error;
        console.log('User info is : ', rows);
        res.send(rows);
    });
});
app.listen(5000, () => console.log('listening on port 5000!'));
