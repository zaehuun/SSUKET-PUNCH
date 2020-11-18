import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Login, Join, Member, MemberList } from "pages";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/member" component={Member} />
          <Route path="/memberlist" component={MemberList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
