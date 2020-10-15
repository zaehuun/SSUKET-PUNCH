import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Login, Join, Member } from "pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/member" component={Member} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
