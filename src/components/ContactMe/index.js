import React from "react";
import "./style.css";

export default class ContactMe extends React.Component {
  render() {
    return (
      <div className="contactInfo">
        <iframe className="contactInfo_googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSeTjrFCrfLFHEIew7O8q8NoarhzjzF60WmQz8cCi1a6u5L0Tw/viewform?embedded=true" height="1080px" width="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    );
  }
}
