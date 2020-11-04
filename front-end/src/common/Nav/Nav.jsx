import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header id="nav">
      <Link to="/memberlist">
        <img src="/images/logo_test.png" alt="logo-img" />
      </Link>
      <div className="menu">
        <Link to="#">인맥 찾기</Link>
        <Link to="#">내 정보</Link>
        <Link to="/">로그아웃</Link>
      </div>
    </header>
  );
}

export default Nav;
