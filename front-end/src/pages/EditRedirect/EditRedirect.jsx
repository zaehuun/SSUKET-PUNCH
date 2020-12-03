// import React from "react";
import axios from "axios";

function EditRedirect({ history }) {
  axios.defaults.withCredentials = true;
  axios
    .get("/session")
    .then(res => {
      // redirect 부분
      const memberData = res.data[0];
      history.push(`/edit/${memberData.id}`);
    })
    .catch(error => {
      alert("로그인 정보가 유실되었습니다\n다시 로그인 해주십시오");
      history.push("/");
    });

  return null;
}

export default EditRedirect;
