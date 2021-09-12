import React from "react";
<<<<<<< HEAD
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
        <Route exact path="/userdashboard" component={UserDashboard} />

        <Route exact path="/usrprfl" component={UsrPrfl} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/chats" component={Chats} />
      </Router>

      <Router>
        <Route exact path="/builderdashboard" component={BuilderDashboard} />

        <Route exact path="/builderprofile" component={BuilderProfile} />
        <Route exact path="/projects" component={MyBids} />
        <Route exact path="/post" component={Available} />
        <Route exact path="/Bnotifications" component={Notifications} />
        <Route exact path="/Bchats" component={Chats} />
      </Router>
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

=======
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
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
  // return (
  //   <div>
  //     <Router>
  //       <UserDashboard />
  //       <Switch>
  //         <Route path="/" exact component={UserProfile} />
  //         <Route path="/projects" component={Projects} />
  //         <Route path="/post" component={Post} />
  //         <Route path="/notifications" component={Notifications} />
  //         <Route path="/chats" component={Chats} />
  //       </Switch>
  //     </Router>
  //   </div>
  // );
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
>>>>>>> a60b16c8bcbf9e2fcd5d48e76d1ea8aaecf89797
export default App;
