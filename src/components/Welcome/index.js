import React from "react";
import titlePic from "../../images/story.png";
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
    return (
      <div id="welcome" className="welcome">
        {this.props.playing && (
          <div>
            <div className="welcome__videoCover" />
            <div id="vid" className="welcome__videoScreen">
              <iframe
                title="loopingVideo"
                src="https://www.youtube.com/embed/gJtqZS3W6Qk?mute=1&autoplay=1&loop=1&playlist=3-Yy5-dyK_U&rel=0&showinfo=0&controls=0&autohide=1"
                frameBorder="0"
                className="welcome__video"
              />
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
