import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Nav, Footer } from "common";
import "./MemberList.css";
import { Link } from "react-router-dom";

function MemberList() {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    axios
      .get("/members")
      .then(response => {
        setMemberList(response.data);
      })
      .catch(error => {
        // error handler
      });
  }, []);

  const warningMessage = () => {
    alert("아직 준비중입니다.");
  };

  return (
    <section id="member-list">
      <Nav />
      <hr />

      <div className="title">
        <h1>인맥 찾기</h1>
      </div>

      <form className="search-form">
        <div className="arrow">
          <select id="prog_lang" name="prog_lang">
            <option>사용가능언어</option>
            <option value="C">C 언어</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="arrow">
          <select id="grade" name="grade">
            <option>학년</option>
            <option value="1">1 학년</option>
            <option value="2">2 학년</option>
            <option value="3">3 학년</option>
            <option value="4">4 학년</option>
          </select>
        </div>
        <div className="arrow">
          <select id="major" name="major">
            <option>학과</option>
            <option value="smart">스마트시스템소프트웨어</option>
            <option value="global">글로벌미디어</option>
            <option value="computer">컴퓨터학부</option>
            <option value="elect">전자정보공학부</option>
          </select>
        </div>
      </form>

      {memberList.map(member => (
        <div className="mem-box" key={member.id}>
          <div className="mem-img">
            <img src="/images/profile_temp.jpg" alt="profile-img" />
          </div>
          <div className="mem-info">
            <h2><Link to="/member">{member.name}</Link></h2>
            <h3>
              {member.dept} | {member.id}
            </h3>
            <h4>{member.msg}</h4>
          </div>
          <div className="btn-wrapper">
            <button onClick={warningMessage}>인맥 추가</button>
          </div>
        </div>
      ))}

      <div className="more-btn-wrapper">
        <button onClick={warningMessage}>더 보기</button>
      </div>

      <Footer />
    </section>
  );
}

export default MemberList;
