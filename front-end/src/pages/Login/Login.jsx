import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const warning = () => {
    alert("아직 준비중입니다.");
  };


  const handleSubmit = e => {
    e.preventDefault();
    
    axios({
      method: 'post',
      url: '/login/',
      data : {
        student_id : document.getElementById('student_id').value,
        st_password : document.getElementById('st_password').value
      }
    });
    warning();
  };
  return (
    <section id="sign-in">
      <form id="form" className="form-signin" onSubmit={handleSubmit}>
        <img src="/images/logo_test.png" alt="logo_sample" />
        <h1 className="title">로그인</h1>

        <div className="input-box">
          <input id="student_id" type="text" name="student_id" className="log-box" placeholder="ex)20200000" maxLength="8" minLength="8" required autoFocus />
          <br />
        </div>
        <div className="input-box">
          <input id="st_password" type="password" name="st_password" className="log-box" placeholder="password" required />
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
