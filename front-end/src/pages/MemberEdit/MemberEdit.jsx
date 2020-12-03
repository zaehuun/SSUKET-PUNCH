import React from "react";
import { useEffect, useState } from "react";
import { Nav, Footer } from "common";
import axios from "axios";
import "./MemberEdit.css";

function MemberEdit({ history, match }) {
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
  const [inputs, setInputs] = useState({
    career: "",
    interest: "",
    ability: "",
    activity: "",
  });

  const addCareer = () => {
    let newData = { ...memberData };
    newData.career.push(inputs.career);
    setMemberData(newData);
    setInputs({
      ...inputs,
      career: "",
    });
    return;
  };

  const addInterest = () => {
    let newData = { ...memberData };
    newData.interest.push(inputs.interest);
    setMemberData(newData);
    setInputs({
      ...inputs,
      interest: "",
    });
    return;
  };

  const handleInput = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleTextarea = e => {
    const { value, name } = e.target;
    setMemberData({
      ...memberData,
      [name]: value,
    });
  };

  const submitEdit = () => {
    axios.defaults.withCredentials = true;
    axios
      .put(`/update/${id}`, memberData)
      .then(res => {
        alert("수정이 완료되었습니다.");
        history.push("/memberlist");
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
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

        if (!res.data[0].ability) {
          res.data[0].ability = "";
        }
        if (!res.data[0].activity) {
          res.data[0].activity = "";
        }

        setMemberData(res.data[0]);
      })
      .catch(error => {
        console.log("member get error");
      });
  }, [id]);

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
            <h1>{memberData.name}</h1>
            <h2>학생</h2>
          </div>
        </div>

        <div className="personal-info">
          <h1>경력</h1>
          <div className="content-list">
            {memberData.career.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
          <input type="text" name="career" placeholder="추가할 경력을 입력해주세요" value={inputs.career} onChange={handleInput} />
          <button onClick={addCareer}>추가</button>
        </div>

        <div className="personal-info">
          <h1>관심분야</h1>
          <div className="content-list">
            {memberData.interest.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
          <input type="text" name="interest" placeholder="추가할 관심분야를 입력해주세요" value={inputs.interest} onChange={handleInput} />
          <button onClick={addInterest}>추가</button>
        </div>

        <div className="personal-info">
          <h1>Activity</h1>
          <textarea name="activity" id="activity" value={memberData.activity} onChange={handleTextarea}></textarea>
        </div>

        <div className="personal-info">
          <h1>Ability</h1>
          <textarea name="ability" id="ability" value={memberData.ability} onChange={handleTextarea}></textarea>
        </div>

        <div className="submit-btn-wrapper">
          <button onClick={submitEdit}>제출</button>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default MemberEdit;
