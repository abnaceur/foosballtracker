import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import main style
import MainDefaultStyle from "./theme-style/main-default-style";

// pages
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="app">
      {/* <MainDefaultStyle /> */}
      <main id="content" className="appContent">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;