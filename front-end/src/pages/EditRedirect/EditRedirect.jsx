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
      console.log(error);
    });

  return null;
}

export default EditRedirect;
