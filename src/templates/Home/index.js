import React from "react";
import "./style.css";

import ScrollToTop from "../../components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import Contact from "../Contact";
import Engineering from "../Engineering";

const notFound404 = () => (
  <div className="notFound404">
    <h1 style={{ marginBottom: "10px" }}>Error 404 - Not Found</h1>
    <h3 className="special_text">
      Sometimes getting lost is the only way to get found.
    </h3>
  </div>
);

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: null, isEngineering: null };
  }

  componentDidMount = () => {
    this.setState({ playing: true });
    if (window.location.pathname.toLowerCase() === "/engineering") {
      this.setState({ isEngineering: true });
    } else {
      this.setState({ isEngineering: false });
    }
  };

  toggleVideo = isOff => {
    if (isOff === "off") {
      this.setState({ playing: false });
    } else
      this.state.playing
        ? this.setState({ playing: false })
        : this.setState({ playing: true });
  };

  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <div className="router_app">
              {!this.state.isEngineering ? <Header toggleVideo={this.toggleVideo} /> : ""}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Portfolio
                      {...props}
                      playing={this.state.playing}
                      toggleVideo={this.toggleVideo}
                    />
                  )}
                />
                <Redirect from="/stories" to="/blog" />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/engineering" component={Engineering} />
                <Route path="*" exact={true} component={notFound404} />
              </Switch>
            </div>
          </ScrollToTop>
        </Router>
        <Footer />
      </div>
    );
  }
}
