import React from "react";
import { Nav, Footer } from "common";
import "./MemberEdit.css";

function MemberEdit({ match }) {
  const id = match.params.id;
  return (
    <section id="member-edit">
      <Nav />
      <hr />

      <div className="center-box">
        <div className="profile">
          <div className="profile-img">
            <img src="/images/profile_temp.jpg" alt="profile" />
          </div>
          <div className="profile-info">
            <h1>홍길동</h1>
            <h2>학생</h2>
          </div>
        </div>

        <div className="personal-info">
          <h1>경력</h1>
          <div className="content-list">
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
          </div>
          <input type="text" placeholder="추가할 경력을 입력해주세요" />
          <button>추가</button>
        </div>

        <div className="personal-info">
          <h1>관심분야</h1>
          <div className="content-list">
            <span>test</span>
            <span>test</span>
          </div>
          <input type="text" placeholder="추가할 관심분야를 입력해주세요" />
          <button>추가</button>
        </div>

        <div className="personal-info">
          <h1>Ability</h1>
          <textarea name="ability" id="ability"></textarea>
        </div>

        <div className="personal-info">
          <h1>Activity</h1>
          <textarea name="activity" id="activity"></textarea>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default MemberEdit;
