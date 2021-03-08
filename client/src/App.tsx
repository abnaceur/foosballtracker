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
import HistoryPage from './pages/HistoryPage';
import MatchPage from './pages/MatchPage';
import RankingPage from './pages/RankingPage';
import SettingPage from './pages/SettingsPage';

const App = () => {
  return (
    <div className="app">
      {/* <MainDefaultStyle /> */}
      <main id="content" className="appContent">
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={HomePage} />
            <Route path="/history" component={HistoryPage} />
            <Route path="/match" component={MatchPage} />
            <Route path="/ranking" component={RankingPage} />
            <Route path="/setting" component={SettingPage} />
            <Redirect to="/dashboard" />
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;