import React from "react";
import { SocialIcon } from "react-social-icons";
import imdbIcon from "../../../images/imdb-icon.png";
import "./style.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="footer__socialIcons">
            <h3>Find me online:</h3>
            <a href="https://www.imdb.com/name/nm2976276/?ref_=fn_al_nm_1">
              <img src={imdbIcon} alt="IMDB" />
            </a>
            <SocialIcon url="https://www.instagram.com/joshua_kellerman/" />
            <SocialIcon url="https://vimeo.com/socksandsandals" />
            <SocialIcon url="https://www.linkedin.com/in/joshua-m-kellerman-718a1b31/" />
            <SocialIcon url="https://www.facebook.com/joshua.kellerman" />
            <SocialIcon url="https://github.com/y0shek/" />
          </div>
          <div className="footer__copyright">
            <p style={{ margin: 0 }}>© 2021 Joshua M Kellerman</p>
            <p style={{ margin: "10px 0 0 0" }}>Created using React.js, FontAwesome, React Social Icons, and React Image Gallery</p>
          </div>
        </div>
      </div >
    );
  }
}
