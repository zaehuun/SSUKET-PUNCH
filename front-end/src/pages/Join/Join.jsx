import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Join.css";

function Join() {
  let username = "";
  let userid = "";
  let usermajor = "";
  let userpassword = "";
  let state = "";
  let msg = "";

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/join", {
        username,
        userid,
        usermajor,
        userpassword,
        state,
        msg,
      })
      .then(response => {
        alert("회원가입이 완료되었습니다.");
        window.location.pathname = "/";
      })
      .catch(error => {
        alert("이미 가입된 회원입니다.");
      });;
  };

  const handleInput = e => {
    switch (e.target.id) {
      case "username":
        username = e.target.value;
        return;
      case "userid":
        userid = e.target.value;
        return;
      case "usermajor":
        usermajor = e.target.value;
        return;
      case "userpw":
        userpassword = e.target.value;
        return;
      case "state":
        state = e.target.value;
        return;
      case "mymsg":
        msg = e.target.value;
        return;
      default:
        return;
    }
  };

  const handleMajorRadio = e => {
    usermajor = e.target.value;
    return;
  }

  const handleStateRadio = e => {
    state = e.target.value;
    return;
  }

  return (
    <section id="sign-up">
      <header>
        <Link to="/">
          <img src="/images/logo_test.png" className="logo-img" alt="logo_sample" />
        </Link>
      </header>
      <hr />

      <form className="form-signup" onSubmit={handleSubmit}>
        <h1 className="title">회원가입</h1>
        <br />
        <div className="input-box">
          <label htmlFor="Name">이름</label> <br />
          <input type="text" name="username" className="log-box" id="username" placeholder="ex)홍길동" onChange={handleInput} required />
          <br />
        </div>

        <div className="input-box">
          <label htmlFor="Student_id">학번</label> <br />
          <input type="text" name="userid" className="log-box" id="userid" placeholder="ex)20200000" maxLength="8" minLength="8" onChange={handleInput} required />
          <br />
        </div>

        <div className="student-state">
          <h2>전공</h2>
          <div className="radio-box">
            <input id="computer" name="usermajor" type="radio" value="컴퓨터학부" onChange={handleMajorRadio} required />
            <label htmlFor="computer">컴퓨터학부</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="software" name="usermajor" type="radio" value="소프트웨어학부" onChange={handleMajorRadio} required />
            <label htmlFor="software">소프트웨어학부</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="smart" name="usermajor" type="radio" value="스마트시스템소프트웨어학과" onChange={handleMajorRadio} required />
            <label htmlFor="smart">스마트시스템소프트웨어학과</label>
          </div>
          <div className="radio-box">
            <input id="global" name="usermajor" type="radio" value="글로벌미디어학부" onChange={handleMajorRadio} required />
            <label htmlFor="global">글로벌미디어학부</label>
          </div>
          <div className="radio-box">
            <input id="elect" name="usermajor" type="radio" value="전자정보공학부" onChange={handleMajorRadio} required />
            <label htmlFor="elect">전자정보공학부</label>
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="Passward">비밀번호</label> <br />
          <input type="password" name="userpw" className="log-box" id="userpw" placeholder="password" onChange={handleInput} required />
          <br />
        </div>

        <div className="student-state">
          <h2>학적상태</h2>
          <div className="radio-box">
            <input id="attending" name="state" type="radio" value="ing" onChange={handleStateRadio} required />
            <label htmlFor="attending">재학</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="take-off" name="state" type="radio" value="break" onChange={handleStateRadio} required />
            <label htmlFor="take-off">휴학</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="graduated" name="state" type="radio" value="grad" onChange={handleStateRadio} required />
            <label htmlFor="graduated">졸업</label>
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="my_msg">자기소개</label> <br />
          <input type="text" name="mymsg" className="log-box" id="mymsg" placeholder="한 줄로 자신을 표현해주세요" onChange={handleInput} required />
          <br />
        </div>

        <button className="log-button" type="submit">
          회원가입
        </button>
      </form>

      <footer>
        <p className="text-center">&copy;2020.10.07</p>
      </footer>
    </section>
  );
}

export default Join;
