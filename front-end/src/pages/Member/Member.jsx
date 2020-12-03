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
    interest: [],
    career: [],
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
        if (!res.data[0].interest) {
          res.data[0].interest = [];
        } else {
          res.data[0].interest = JSON.parse(res.data[0].interest);
        }

        if (!res.data[0].career) {
          res.data[0].career = [];
        } else {
          res.data[0].career = JSON.parse(res.data[0].career);
        }

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
              {memberData.career.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </p>
            <h3>관심분야</h3>
            <p>
              {memberData.interest.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
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
            <p>{memberData.activity}</p>
          </div>
        </div>
      </div>

      <div className="ability section-row">
        <div className="col-12">
          <div className="title">
            <h1>Ability</h1>
          </div>
          <div className="content-box">
            <p>{memberData.ability}</p>
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
