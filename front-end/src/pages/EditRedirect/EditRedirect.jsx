// import React from "react";
import axios from "axios";

function EditRedirect({ history }) {
  axios.defaults.withCredentials = true;
  axios
    .get("/session")
    .then(res => {
      // redirect 부분
    })
    .catch(error => {
      console.log(error);
    });

  // 임시 이동
  history.push("/edit/20160354");

  return null;
}

export default EditRedirect;
