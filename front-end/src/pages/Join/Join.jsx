import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Join.css";

function Join() {
  let username = "";
  let userid = "";
  let userpassword = "";
  let state = "";

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/join", {
        username,
        userid,
        userpassword,
        state,
      })
      .then(response => {
        alert("회원가입이 완료되었습니다.");
        window.location.pathname = "/";
      });
  };

  const handleInput = e => {
    switch (e.target.id) {
      case "username":
        username = e.target.value;
        return;
      case "userid":
        userid = e.target.value;
        return;
      case "userpw":
        userpassword = e.target.value;
        return;
      case "state":
        state = e.target.value;
        return;
      default:
        return;
    }
  };

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

        <div className="input-box">
          <label htmlFor="Passward">비밀번호</label> <br />
          <input type="password" name="userpw" className="log-box" id="userpw" placeholder="password" onChange={handleInput} required />
          <br />
        </div>

        <div className="student-state">
          <h2>학적상태</h2>
          <div className="radio-box">
            <input id="state" name="state" type="radio" value="ing" onChange={handleInput} required />
            <label htmlFor="attending">재학</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="state" name="state" type="radio" value="break" onChange={handleInput} required />
            <label htmlFor="take-off">휴학</label>
            <br />
          </div>
          <div className="radio-box">
            <input id="state" name="state" type="radio" value="grad" onChange={handleInput} required />
            <label htmlFor="graduated">졸업</label>
          </div>
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
