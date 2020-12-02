import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Login, Join, Member, MemberList, MemberEdit, EditRedirect } from "pages";

function App() {

  axios.defaults.baseURL = "http://localhost:5000";
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/member/:id" component={Member} />
          <Route path="/memberlist" component={MemberList} />
          <Route exact path="/edit" component={EditRedirect} />
          <Route path="/edit/:id" component={MemberEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
