import React from "react";
import YouTube from "react-youtube";
import throttle from 'lodash/throttle';
import "./style.css";

export default class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = { atTop: true };
  }

  handleScroll = throttle(() => {
    // Header controls for whether or not user is scrolled near top
    if (window.scrollY <= 100) {
      this.setState({ atTop: true });
    } else {
      this.setState({ atTop: false });
    }
  }, 100);

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

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
        playlist: "O5EcPaXcZSU",
        controls: 0
      }
    }
    if (this.props.playing && mobile) this.props.toggleVideo()
    return (
      <div id="welcome" className="welcome">
        <button className={this.state.atTop ? 'welcome__button' : 'welcome__button welcome__button--scrolled'} onClick={this.scrollDown}>
          Hello
        </button>
        {
          this.props.playing && (
            <div>
              <div className="welcome__videoCover" />
              <div id="vid" className="welcome__videoScreen">
                <YouTube videoId="O5EcPaXcZSU" className="welcome__video" opts={opts} ></YouTube>
              </div>
            </div>
          )
        }
        {
          !mobile && (
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
          )
        }
      </div >
    );
  }
}
