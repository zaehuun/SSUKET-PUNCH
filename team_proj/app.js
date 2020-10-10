var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


/////////////////////////////////////
/////////////**LOGIN *///////////////
//////////학번 : student_id
//////////비밀번호 : st_password
app.post('/login', function(req, res) {
    /*로그인 가능 여부 코드 추가 예정*/
    console.log('login code');
    console.log('student_id: ' + req.body.student_id);
    console.log('student_pw: ' + req.body.st_password);

    res.send(req.body);
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
    console.log('이름: ' + req.body.username);
    console.log('학번: ' + req.body.userid);
    console.log('비번: ' + req.body.userpassword);
    console.log('상태: ' + req.body.state);

    res.send(req.body);
});


app.listen(3000, () => console.log('listening on port 3000!'));
