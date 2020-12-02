import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Member.css";

function Member({ history, match }) {
  const id = match.params.id;
  const memberType = {
    id: 0,
    name: "",
    interst: "",
    career: "",
    activity: "",
    ability: "",
  };
  const [memberData, setMemberData] = useState(memberType);

  const gobackList = () => {
    history.push("/memberlist");
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get(`/member/${id}`)
      .then(res => {
        setMemberData(res.data[0]);
      })
      .catch(error => {});
  }, [id]);

  return (
    <section id="member">
      <header>
        <Link to="/memberlist">
          <img src="/images/logo_test.png" alt="logo-img" />
        </Link>
      </header>
      <hr />

      <div className="profile section-row">
        <div className="col-3">
          <div className="profile-img">
            <img src="/images/profile_temp.jpg" alt="profile images" />
          </div>
        </div>
        <div className="col-9">
          <div className="profile-info">
            <h1>{memberData.name}</h1>
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
        <button onClick={gobackList}>목록</button>
      </div>

      <footer>
        <p>&copy;2020.10.07</p>
      </footer>
    </section>
  );
}

export default Member;
