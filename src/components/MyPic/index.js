import React from 'react';
import myPic from '../../images/me_bw.jpg';
import './style.css';

export default class MyPic extends React.Component {

  render() {
    return (
      <a href="/">
        <div className={this.props.atTop ? 'header__titleImg' : 'header__titleImg header__titleImg--scrolled'}>
          <div className='header__image'>
            <img src={myPic} alt='Joshua M Kellerman headshot' />
          </div>
          <div className='header__title'>
            <h2 style={{ margin: 0, color: '#333' }}>Joshua M</h2>
            <h4 className={this.props.atTop ? 'special_text' : 'special_text small_text'} style={{ marginTop: '5px', color: '#333' }}>Director / Eng</h4>
          </div>
        </div>
      </a>
    );
  }
}
