import React from 'react';
import throttle from 'lodash/throttle';

import Navigation from '../../../components/Navigation';
import MyPic from '../../../components/MyPic';
import ToTop from '../../../components/ToTop';

import './style.css';


export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={atTop:true};
  }

  goToTop = () => {
    window.scroll({top: 0, behavior: "smooth"});
  }

  handleScroll = throttle(() => {
    // Turn off video if user scrolls far enough down, if video exists
    if(document.getElementById('vid')){
      const height = document.getElementById('vid').offsetHeight;
      if(window.scrollY >= height+100) this.props.toggleVideo('off');
    }
    // Header controls for whether or not user is scrolled near top
    if(window.scrollY <= 100){
        this.setState({atTop: true});
    } else {
      this.setState({atTop: false});
    }

  }, 100);

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  render(){
    return (
      <div className='header'>
        <div className='content'>
          <div className={this.state.atTop ? 'header__picNav' : 'header__picNav header__picNav--scrolled'}>
            <ToTop atTop={this.state.atTop} goToTop={this.goToTop} />
            <MyPic atTop={this.state.atTop} />
            <Navigation atTop={this.state.atTop} />
          </div>
        </div>
      </div>
    );
  }
}
