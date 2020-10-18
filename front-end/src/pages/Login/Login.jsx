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
    axios.post("/login");
    warning();
  };
  return (
    <section id="sign-in">
      <form className="form-signin" onSubmit={handleSubmit}>
        <img src="/images/logo_test.png" alt="logo_sample" />
        <h1 className="title">로그인</h1>

        <div className="input-box">
          <input type="text" name="student_id" className="log-box" placeholder="ex)20200000" maxLength="8" minLength="8" required autoFocus />
          <br />
        </div>
        <div className="input-box">
          <input type="password" name="st_password" className="log-box" placeholder="password" required />
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
