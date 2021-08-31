import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notifications from "./pages/Notifications";
import Projects from "./pages/Projects";
import Post from "./pages/Post";
import Chats from "./pages/Chats";
import UserProfile from "./pages/UserProfile";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { User } from './components/User';
// import { Builder } from './components/Builder';
// import { SignUp } from './components/SignUp';
// import { Home } from './components/Home';
import "./App.css";

// import { ShowCase } from './components/ShowCase';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={UserProfile} />
          <Route path="/projects" component={Projects} />
          <Route path="/post" component={Post} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/chats" component={Chats} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
