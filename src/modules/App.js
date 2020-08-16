import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/index";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Transfer from "../modules/Transfer/";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <div id="appCapsule">
            <Route exact path="/" component={Home} />
            <Route path="/transfer" component={Transfer} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
