import React from 'react';
import throttle from 'lodash/throttle';

import Navigation from '../../../components/Navigation';
import MyPic from '../../../components/MyPic';
import ToTop from '../../../components/ToTop';
import { SocialIcon } from "react-social-icons";
import imdbIcon from "../../../images/imdb-icon.png";

import './style.css';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { atTop: true };
  }

  goToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  handleScroll = throttle(() => {
    // Turn off video if user scrolls far enough down, if video exists
    if (document.getElementById('vid')) {
      const height = document.getElementById('vid').offsetHeight;
      if (window.scrollY >= height + 100) {
        this.props.toggleVideo('off');
      }
    }
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

  render() {
    return (
      <div className='header'>
        <p className='header__looking-for-engineering'><a href="/engineering">Looking for my Software Engineer portfolio?</a></p>
        <div className='content'>
          <div className={this.state.atTop ? 'header__picNav' : 'header__picNav header__picNav--scrolled'}>
            <ToTop atTop={this.state.atTop} goToTop={this.goToTop} />
            <MyPic atTop={this.state.atTop} />
            <div className="header__socialIcons">
              <a href="https://www.imdb.com/name/nm2976276/?ref_=fn_al_nm_1">
                <img src={imdbIcon} alt="IMDB" />
              </a>
              <SocialIcon url="https://vimeo.com/socksandsandals" />
              <SocialIcon url="https://www.instagram.com/joshua_kellerman/" />
            </div>
            <Navigation atTop={this.state.atTop} />
          </div>
        </div>
      </div>
    );
  }
}
