import React from "react";
import titlePic from "../../images/story.png";
import YouTube from "react-youtube";
import "./style.css";

export default class Welcome extends React.Component {
  scrollDown = () => {
    if (document.getElementById("vid")) {
      const height = document.getElementById("vid").offsetHeight;
      window.scroll({ top: height + 100, behavior: "smooth" });
    } else if (document.getElementById("welcome")) {
      const height = document.getElementById("welcome").offsetHeight;
      window.scroll({ top: height + 100, behavior: "smooth" });
    } else window.scroll({ top: 1000, behavior: "smooth" });
  };

  render() {
    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && !window.MSStream;
    const opts = {
      playerVars: {
        autoplay: 1,
        loop: 1,
        mute: 1,
        controls: 0
      }
    }
    if (this.props.playing && mobile) this.props.toggleVideo()
    return (
      <div id="welcome" className="welcome">
        {this.props.playing && (
          <div>
            <div className="welcome__videoCover" />
            <div id="vid" className="welcome__videoScreen">
              <YouTube videoId="uuOublRjs9A" className="welcome__video" opts={opts} ></YouTube>
            </div>
          </div>
        )}
        {!mobile && (
          <div className="welcome__stopPlayer">
            <button onClick={this.props.toggleVideo}>
              {this.props.playing ? (
                <div>
                  <i className="far fa-times-circle" />
                  <br />
                  <p>Stop Video</p>
                </div>
              ) : (
                <div>
                  <i className="fas fa-play-circle" />
                  <br />
                  <p>Play Video</p>
                </div>
              )}
            </button>
          </div>
        )}
        <div className={this.props.playing ? "welcome__titlepic_off" : "welcome__titlepic"}>
          <img src={titlePic} alt="A sense of Story" />
          <button className="welcome__button" onClick={this.scrollDown}>
            Hello
          </button>
        </div>
      </div>
    );
  }
}
