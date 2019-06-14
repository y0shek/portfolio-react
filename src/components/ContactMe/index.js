import React from "react";
import myPic from "../../images/me_bw.jpg";
import "./style.css";

export default class ContactMe extends React.Component {
  render() {
    return (
      <div className="contactInfo">
        <div className="contactInfo__content">
          <p>
            I am located in the San Francisco Bay Area. I may be available to
            direct or write short or feature films, corporate video projects, or
            oversee media teams at events. Please email me to check my
            availability.
          </p>
          <p>
            My rates for personal or non-profit projects are negotiable. I often
            participate in artistic projects freely, so please contact me with
            interesting artistic projects! 😊 😊 😊
          </p>
          <p>
            My rates for corporate video:
            <br />
            $100/hr - Media Project Consultation (story, ideation, writing)
            <br />
            $150/hr - Film Production (producing, directing, casting, editing)
          </p>
          <p>
            Please send any requests to: <em>kellerman.joshua.m@gmail.com</em>
          </p>
          <p style={{ marginTop: "10px" }}> No solicitors 😊</p>
        </div>
      </div>
    );
  }
}
