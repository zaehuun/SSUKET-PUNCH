import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Nav, Footer } from "common";
import "./MemberList.css";
import { Link } from "react-router-dom";

function MemberList() {
  const [memberList, setMemberList] = useState([]);
  const [filterMemberList, setFilterMemberList] = useState([]);
  const [majorFilter, setMajorFilter] = useState("학과");
  const [idFilter, setIdFilter] = useState("학번");

  const handleMajorFilter = e => {
    const targetValue = changeMajorName(e.target.value);
    setMajorFilter(targetValue);
    filter(idFilter, targetValue);
  };

  const handleIdFilter = e => {
    const targetValue = e.target.value;
    setIdFilter(targetValue);
    filter(targetValue, majorFilter);
  };

  const filter = (id, major) => {
    let filterMember = [];
    if (id === "학번" && major === "학과") {
      filterMember = memberList;
    } else if (id === "학번") {
      filterMember = memberList.filter(member => member.dept === major);
    } else if (major === "학과") {
      filterMember = memberList.filter(member => member.id.startsWith(id));
    } else {
      filterMember = memberList.filter(member => member.id.startsWith(id) && member.dept === major);
    }
    setFilterMemberList(filterMember);
  };

  const changeMajorName = name => {
    switch (name) {
      case "smart":
        return "스마트시스템소프트웨어학과";
      case "global":
        return "글로벌미디어학부";
      case "computer":
        return "컴퓨터학부";
      case "software":
        return "소프트웨어학부";
      case "elect":
        return "전자정보공학부";
      default:
        return name;
    }
  };

  const warningMessage = () => {
    alert("아직 준비중입니다.");
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("/members")
      .then(response => {
        setMemberList(response.data);
        setFilterMemberList(response.data);
      })
      .catch(error => {
        // error handler
      });
  }, []);

  return (
    <section id="member-list">
      <Nav />
      <hr />

      <div className="title">
        <h1>인맥 찾기</h1>
      </div>

      <form className="search-form">
        {/* <div className="arrow">
          <select id="prog_lang" name="prog_lang">
            <option>사용가능언어</option>
            <option value="C">C 언어</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div> */}
        <div className="arrow">
          <select id="grade" name="grade" onChange={handleIdFilter}>
            <option>학번</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
          </select>
        </div>
        <div className="arrow">
          <select id="major" name="major" onChange={handleMajorFilter}>
            <option>학과</option>
            <option value="smart">스마트시스템소프트웨어</option>
            <option value="global">글로벌미디어</option>
            <option value="computer">컴퓨터학부</option>
            <option value="software">소프트웨어학부</option>
            <option value="elect">전자정보공학부</option>
          </select>
        </div>
      </form>

      {filterMemberList.map(member => (
        <div className="mem-box" key={member.id}>
          <div className="mem-img">
            <img src="/images/profile_temp.jpg" alt="profile-img" />
          </div>
          <div className="mem-info">
            <h2>
              <Link to={`/member/${member.id}`} >{member.name}</Link>
            </h2>
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

      {/* <div className="more-btn-wrapper">
        <button onClick={warningMessage}>더 보기</button>
      </div> */}

      <Footer />
    </section>
  );
}

export default MemberList;
