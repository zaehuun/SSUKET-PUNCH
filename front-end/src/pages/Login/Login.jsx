import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login({ history }) {
  let inputID = "";
  let inputPW = "";

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("/login", {
        userid: inputID,
        userpassword: inputPW,
      })
      .then(response => {
        // 로그인 성공 했을 때 코드
        history.push("/memberlist");
      })
      .catch(error => {
        // 로그인 실패 했을 때 코드
        alert("아이디나 비밀번호가 틀립니다.");
      });

  };

  const handleInput = e => {
    switch (e.target.id) {
      case "userid":
        inputID = e.target.value;
        return;
      case "userpw":
        inputPW = e.target.value;
        return;
      default:
        return;
    }
  };

  return (
    <section id="sign-in">
      <form id="form" className="form-signin" onSubmit={handleSubmit}>
        <img src="/images/logo_test.png" alt="logo_sample" />
        <h1 className="title">로그인</h1>

        <div className="input-box">
          <input id="userid" type="text" name="userid" className="log-box" placeholder="ex)20200000" maxLength="8" minLength="8" onChange={handleInput} required autoFocus />
          <br />
        </div>
        <div className="input-box">
          <input id="userpw" type="password" name="userpw" className="log-box" placeholder="password" onChange={handleInput} required />
          <br />
        </div>

        <Link to="/join" className="signup-link">
          회원가입
        </Link>
        <br />
        <br />
        <Link to="/member" className="signup-link">
          멤버보기 임시링크
        </Link>
        <button className="log-button" type="submit">
          Log In
        </button>
      </form>

      <footer>
        <p>&copy;2020.10.07</p>
      </footer>
    </section>
  );
}

export default Login;
