import React from 'react';
import './style.css';

export default class ToTop extends React.Component{

  render(){
    return(
      <div className={this.props.atTop ? 'toTop toTop--hidden' : 'toTop'} onClick={this.props.goToTop}>
        <i className="fas fa-arrow-up"></i>
        <p>To Top</p>
      </div>
    );
  }
}
