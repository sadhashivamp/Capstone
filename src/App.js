import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notifications from "./user/Notifications";
import Projects from "./user/Projects";
import Post from "./user/Post";
import Chats from "./user/Chats";
import UserProfile from "./user/UserProfile";
import UserDashboard from "./components/UserDashboard";
// import { Header } from './components/Header';
// import { User } from './components/User';
// import { Builder } from './components/Builder';
// import { SignUp } from './components/SignUp';
// import { Home } from './components/Home';
import "./App.css";
// import BuilderDashboard from "./components/BuilderDashboard";
// import Profile from "./builder/Profile";
// import Notifications from "./builder/Notifications";
// import Available from "./builder/Available";
// import Chats from "./builder/Chats";
// import MyBids from "./builder/MyBids";

// import { ShowCase } from './components/ShowCase';

const App = () => {
  return (
    <div>
      <Router>
        <UserDashboard />
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
  // return (
  //   <div>
  //     <Router>
  //       <BuilderDashboard />
  //       <Switch>
  //         <Route path="/" exact component={Profile} />
  //         <Route path="/projects" component={MyBids} />
  //         <Route path="/post" component={Available} />
  //         <Route path="/notifications" component={Notifications} />
  //         <Route path="/chats" component={Chats} />
  //       </Switch>
  //     </Router>
  //   </div>
  // );
};
export default App;
