import React, { Component } from "react";

import UserProfile from "react-user-profile";

class UsrPrfl extends Component {
  render() {
    const photo =
      "https://www.notsoporangi.com/upload/media/entries/2018-06/11/746-0-12fad64ea66aa5787fbfcce858e32cb7.jpg";
    const userName = "prabhas";
    const location = "hyderabad, India";

    return (
      <div style={{ margin: "0 auto", width: "1000px" }}>
        <UserProfile photo={photo} userName={userName} location={location} />
      </div>
    );
  }
}

export default UsrPrfl;
