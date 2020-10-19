import React from "react";
import { Link } from "react-router-dom";
import "./Member.css";

function Member() {
  const warning = () => {
    alert("아직 준비중입니다.");
  };

  return (
    <section id="member">
      <header>
        <Link to="/">
          <img src="/images/logo_test.png" alt="logo-img" />
        </Link>
      </header>
      <hr />

      <div className="profile section-row">
        <div className="col-3">
          <div class="profile-img">
            <img src="./images/profile_temp.jpg" alt="profile images" />
          </div>
        </div>
        <div className="col-9">
          <div class="profile-info">
            <h1>홍길동</h1>
            <h2>학생</h2>
            <h3>경력</h3>
            <p>
              <span>학과 스마트 경진대회 수상</span>
              <span>학부 연구생 1년</span>
            </p>
            <h3>관심분야</h3>
            <p>
              <span>React</span>
              <span>WebFrontEnd</span>
              <span>Server</span>
              <span>Python</span>
            </p>
          </div>
        </div>
      </div>

      <div className="activity section-row">
        <div className="col-12">
          <div className="title">
            <h1>Activity</h1>
          </div>
          <div className="content-box">
            <p>대외활동</p>
            <p>프로젝트</p>
          </div>
        </div>
      </div>

      <div className="ability section-row">
        <div className="col-12">
          <div className="title">
            <h1>Ability</h1>
          </div>
          <div className="content-box">
            <p>보유한 자격증</p>
            <p>사용 가능 언어</p>
            <p>등등등...</p>
          </div>
        </div>
      </div>

      <div className="btn-wrapper">
        <button onClick={warning}>목록</button>
      </div>

      <footer>
        <p>&copy;2020.10.07</p>
      </footer>
    </section>
  );
}

export default Member;
