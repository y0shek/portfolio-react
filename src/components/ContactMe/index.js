import React from "react";
import "./style.css";

export default class ContactMe extends React.Component {
  render() {
    return (
      <div className="contactInfo">
        <div className="contactInfo__content">
          <p>
            I am located in the New York City Upper Manhattan area. I am available to
            film, direct and write commercials and other promotional content. Please <a href="mailto:kellerman.joshua.m@gmail.com">email me to check my
            availability and rates.
            </a>
          </p>
          <p>
            My rates for personal or non-profit projects are negotiable and I am open to volunteer work. Please contact me with
            interesting artistic projects! <span role="img">😊 😊 😊</span>
          </p>
          <p>
            Please send any requests to: <em>kellerman.joshua.m@gmail.com</em>
          </p>
          <p style={{ marginTop: "10px" }}> No solicitors <span role="img">😎</span></p>
        </div>
      </div>
    );
  }
}
