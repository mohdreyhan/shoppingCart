import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AboutPage extends Component {
  render(){
  return (
      <div>
        {(() => {
          var value = localStorage.getItem("token");
          console.log(value);
          if (value === "") {
            return (this.props.history.replace({
              pathname: "/"
            }));
          } else {
            return(
              <div>
      <p>
        ATMECS makes intelligent and sustainable products in IoT which helps to
        Capture, Monitor, Manage and Analyze the IoT Data.
      </p>
      <br />
      <Link to="/home">homepage</Link>
      </div>
            )
          }
        })()}
      </div>
    );
  }
}