import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import User from "./components/Login/User";
import Login from "./components/Login/Login";
import Builder from "./components/Login/Builder";
import ImageSlider from "./components/HomeSlider/ImageSlider";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Login/Signup";
import Services from "./components/Services/Services";

import UserDashboard from "./components/UserDashboard/UserDashboard";
import UsrPrfl from "./components/UserDashboard/UsrPrfl";
import Projects from "./components/UserDashboard/Projects";
import Post from "./components/UserDashboard/Post";
import Notifications from "./components/UserDashboard/Notifications";
import Chats from "./components/UserDashboard/Chats";

import BuilderDashboard from "./components/BuilderDashboard/BuilderDashboard";
import BuilderProfile from "./components/BuilderDashboard/BuilderProfile";
import Available from "./components/BuilderDashboard/Available";
import MyBids from "./components/BuilderDashboard/MyBids";

const App = () => {
  return (
    <div className="cap-body">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={ImageSlider}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/builder" component={Builder}></Route>
        </Switch>
      </Router>

      <Router>
        <Route path="/userdashboard" exact component={UserDashboard} />
        <Switch>
          <Route path="/usrprfl" exact component={UsrPrfl} />
          <Route path="/projects" component={Projects} />
          <Route path="/post" component={Post} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/chats" component={Chats} />
        </Switch>
      </Router>

      <Router>
        <Route path="/builderdashboard" exact component={BuilderDashboard} />
        <Switch>
          <Route path="/" exact component={BuilderProfile} />
          <Route path="/projects" component={MyBids} />
          <Route path="/post" component={Available} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/chats" component={Chats} />
        </Switch>
      </Router>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
