import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const logout = () => {
    axios
      .post("/logout")
      .then(res => {
        alert("로그아웃 되었습니다.");
        window.location.pathname = "/";
      })
      .catch(error => {
        alert("Logout Error");
      });
  };
  return (
    <header id="nav">
      <Link to="/memberlist">
        <img src="/images/logo_test.png" alt="logo-img" />
      </Link>
      <div className="menu">
        <Link to="#">인맥 찾기</Link>
        <Link to="#">내 정보</Link>
        <a onClick={logout}>로그아웃</a>
      </div>
    </header>
  );
}

export default Nav;
