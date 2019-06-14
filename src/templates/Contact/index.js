import React from "react";
import ContactMe from "../../components/ContactMe";
import "./style.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <ContactMe />
      </div>
    );
  }
}
