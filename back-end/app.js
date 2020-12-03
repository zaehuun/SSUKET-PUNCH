var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser'); //for post
var mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = dbconfig.init();
const cors = require('cors');
var app = express();
let corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
dbconfig.connect(connection);
//var router = require('./router/main')(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors(corsOptions));

/* session setting */
//app.use(cookieParser('qwerasdf'));
app.use(session({
    secret: 'qwerasdf',
    resave: false,
    saveUninitialized: true,
    /*cookie:{
        httpOnly: true,
        secure: false,
    }*/
   }));

//html 위치 정의
//app.set('views', __dirname + '/views');
//html 렌더링 할 때 EJS엔진 사용하도록 설정
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
//app.use(express.static('public'));
app.get('/', function(req,res){

    res.send(req.session.userid);
})
/*
app.get('/session',function(req,res){
    //console.log(req.sessionID);
    req.session.userid = "20201234";
    req.session.save(()=>{
        res.redirect('/logined');
    })
})
*/

/*
로그인
학번 : userid
비밀번호 : userpassword

성공 시 SUCCESS : 1, 'id' : id
실패 시 SUCCESS : 0, 'id' : null
*/
app.post('/login', function(req, res) {
    var id = req.body.userid;
    var pw = req.body.userpassword;
    connection.query('SELECT count(*)  cnt from users where id=? and password=?',[id,pw], (error, rows)=>{
        if (error) throw error;
        var cnt = rows[0].cnt;
        if (cnt == 1){ //로그인

            req.session.userid = id; //세션 저장
            //req.session.save();
            console.log(req.session);
            //res.writeHead(200,{"id":id});
            res.status(200).send({'SUCCESS' : 1, 'id' : id });
        }
        else{ //로그인 불가
            res.status(404).send({'SUCCESS' : 0, 'id' : null });
        }
    });
});

app.post('/logout', function(req,res){
    delete req.session.userid;
    res.status(200).send({'SUCCESS' : 1});
})


/*
회원가입
이름 : username
학번 : userid
비번 : userpassword
학적st : state

성공 시 SUCCESS : 1
실패 시 SUCCESS : 0
*/
app.post('/join', function(req, res) {
    //console.log(req.sessionID);
    var name = req.body.username;
    var id = req.body.userid;
    var pw = req.body.userpassword;
    var st = req.body.state;
    var dept = req.body.usermajor;
    var msg = req.body.msg;

    connection.query('SELECT count(*)  cnt from users where id=?',[id], (error, rows)=>{
        if (error) throw error;
        var cnt = rows[0].cnt;
        if (cnt == 1){ //기존 회원 존재 -> 회원 가입 불가
            res.status(404).send({'SUCCESS' : 0 });
        }
        else{ //회원 가입 가능
            connection.query('INSERT INTO users (id, name, password, state, dept, msg) VALUES (?, ?, ?, ?, ?, ?)',[id,name,pw,st,dept,msg], (error, rows)=>{
                if (error) throw error;
                else{
                    connection.query('INSERT INTO user (id, name) VALUES (?, ?)',[id,name], (error, rows)=>{
                        if (error) throw error;
                        else{
                            res.status(200).send({'SUCCESS' : 1 });
                        }
                    });
                }
            });
        }
    });
});

app.put('/update/:id',function(req,res){
    var id = req.params.id;
    var interest = req.body.interest.join(',');
    var career = req.body.career.join(',');
    var activity = req.body.activity;
    var ability = req.body.ability;
    console.log(req.body);
    connection.query('UPDATE user SET interest=?, career=?, activity=?, ability=? where id=?',[interest,career,activity,ability,id], (error, rows)=>{
        if (error) throw error;

        res.status(200).send({"id":id});
    });
});

app.get('/session',function(req,res){

    console.log(req.session);
    
    if(req.session.userid){
        connection.query('SELECT * from user where id=?',[req.session.userid], (error, rows)=>{
            if (error) throw error;
            console.log('User info is : ', rows);
            res.status(200).send(rows);
            
        });
    }
});


app.get('/member/:id', function(req,res){
    //console.log(req.params.id);
    var id = req.params.id;
    connection.query('SELECT count(*)  cnt from user where id=?',[id], (error, rows)=>{
        if (error) throw error;
        var cnt = rows[0].cnt;
        if (cnt == 1){
            connection.query('SELECT * from user where id=?',[id], (error,rows)=>{
                if (error) throw error;
                console.log('id' + rows[0].id);
                console.log('name' + rows[0].name);
                if (rows[0].career != null){
                    rows[0].career = rows[0].career.split(',');
                }
                if (rows[0].activity != null){
                    rows[0].activity = rows[0].activity.split(',');
                }
                /*
                if (rows[0].interest != null){
                    rows[0].interest = rows[0].interest.split(',');
                }
                if (rows[0].ability != null){
                    rows[0].ability = rows[0].ability.split(',');
                }*/
                console.log('career' + rows[0].career);
                console.log('activity' + rows[0].activity);
                console.log('ability' + rows[0].ability);

                res.status(200).send(rows);
            });
        }
        else{
            res.status(404).send({'SUCCESS' : 0});
        }
    });
});


app.get('/members',function(req,res){
    console.log(req.session);
    connection.query('SELECT * from users', (error, rows)=>{
        if (error) throw error;
        console.log('User info is : ', rows);
        res.status(200).send(rows);
    });
});
app.listen(5000, () => console.log('listening on port 5000!'));
