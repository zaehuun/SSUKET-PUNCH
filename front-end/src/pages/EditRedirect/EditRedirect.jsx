// import React from "react";
import axios from "axios";

function EditRedirect({ history }) {
  const header = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
    credentials: "include",
    test: "body 내용 잘가는지 테스트",
  };

  axios
    .get("/session", header)
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
