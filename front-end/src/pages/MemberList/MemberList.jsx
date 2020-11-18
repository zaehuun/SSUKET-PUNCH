import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Nav, Footer } from "common";
import "./MemberList.css";
import { Link } from "react-router-dom";

function MemberList() {
  useEffect(() => {
    // 서버에서 멤버 리스트를 받아오는 axios
    axios
      .get("/members")
      .then(response => {
        // member를 받아memberList 변수에 저장하는 코드
        console.log(response);
      })
      .catch(error => {
        // error handler
      });
  }, []);

  const warningMessage = () => {
    alert("아직 준비중입니다.");
  };

  let memberList = [
    {
      name: "홍길동",
      major: "스마트시스템소프트웨어학과",
      studentId: 20161234,
      message: "상태메세지",
    },
    {
      name: "고길동",
      major: "컴퓨터학부",
      studentId: 20171234,
      message: "상태메세지",
    },
    {
      name: "황길동",
      major: "소프트웨어학부",
      studentId: 20181234,
      message: "상태메세지",
    },
  ];

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
        <div className="mem-box" key={member.studentId}>
          <div className="mem-img">
            <img src="/images/profile_temp.jpg" alt="profile-img" />
          </div>
          <div className="mem-info">
            <h2><Link to="/member">{member.name}</Link></h2>
            <h3>
              {member.major} | {member.studentId}
            </h3>
            <h4>{member.message}</h4>
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
