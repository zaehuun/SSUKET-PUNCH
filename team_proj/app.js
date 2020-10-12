var express = require('express');
var bodyParser = require('body-parser'); //for post
var mysql = require('mysql');
var app = express();

var router = require('./router/main')(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

/*
//For mysql database connection setting
var connection = mysql.createConnection({
    host : 'localhost',
    user : '유저 이름 입력',
    password : '0000',
    database : 'DB Name'
});
*/



//임시 디비
let db = {};
/*
{
    id : {
        name : "  "
        pw : "  "
        ing : "  "
    }
}

*/


//html 위치 정의
app.set('views', __dirname + '/views');
//html 렌더링 할 때 EJS엔진 사용하도록 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static('public'));

app.use(function timeLog(req, res, next) {
    let today = new Date();
    console.log('Time: ', today);
    next();
 });

/////////////////////////////////////
/////////////**LOGIN *///////////////
//////////학번 : student_id
//////////비밀번호 : st_password
app.post('/login', function(req, res) {
    /*로그인 가능 여부 코드 추가 예정*/
    console.log('login code');
    if (db[req.body.student_id]){
        console.log(req.body);
        res.send("로그인 완료");
    }
    res.send("회원가입 하세요");
});


/////////////////////////////////////
/////////////**REGISTER *///////////////
//////////이름 : username
//////////학번 : userid
//////////비번 : userpassword
/////////학적st : state
app.post('/register', function(req, res) {
    /*가입 가능 여부 코드 추가 예정*/
    console.log('register code');
    if (db[req.body.userid]){
        res.send("이미 존재하는 회원");
    }
    db[req.body.userid] = req.body;
    console.log(req.body);
    res.send(db[req.body.userid]);
    //res.send(req.body);
});


app.listen(3000, () => console.log('listening on port 3000!'));
