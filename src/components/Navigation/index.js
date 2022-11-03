import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const navData = [
  { title: "Portfolio", url: "/", active: false },
  { title: "News", url: "/news", active: false },
  { title: "Blog", url: "/blog", active: false },
  { title: "Contact", url: "/contact", active: false }
];

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: navData
    };
  }

  componentDidMount = () => {
    let newData = this.state.data.slice();
    for (var i = 0; i < newData.length; i++) {
      if (newData[i].url === window.location.pathname) {
        newData[i].active = true;
        break;
      }
    }
    this.setState({ data: newData });
  };

  scrollDown = () => {
    if (document.getElementById("portfolio")) {
      const height = document.getElementById("portfolio").offsetTop;
      window.scroll({ top: height - 50, behavior: "smooth" });
    }
  };

  handleClick = i => {
    let newData = this.state.data.slice();
    for (var j = 0; j < newData.length; j++) {
      newData[j].active = false;
    }
    newData[i].active = true;
    this.setState({ data: newData });
    if (newData[i].url === "/") {
      this.scrollDown();
    }
  };

  render() {
    return (
      <div
        className={
          this.props.atTop ? "navigation" : "navigation navigation--scrolled"
        }
      >
        <ul>
          {this.state.data &&
            this.state.data.map((obj, i) => {
              return (
                <Link
                  to={obj.url}
                  onClick={() => {
                    return this.handleClick(i);
                  }}
                  key={i}
                >
                  <li
                    className={
                      obj.active
                        ? "navigation__navItem navigation__navItem--active"
                        : "navigation__navItem"
                    }
                  >
                    {obj.title}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }
}
