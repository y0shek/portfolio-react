import React from 'react';
import constructionPic from '../../images/construction.png';
import './style.css';

export default class Construction extends React.Component {
  render() {
    return (
      <div className='construction'>
        <div className='content'>
          <h3 style={{ marginTop: 0 }}>The {this.props.theName} is currently under construction.</h3>
          <img style={{ maxWidth: '600px', width: '100%' }} src={constructionPic} alt='Under construction' />
        </div>
      </div>
    );
  }
}
