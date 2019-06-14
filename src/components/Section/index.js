import React from 'react';
import './style.css';

export default class Section extends React.Component{
  render(){
    return (
      <article className='section' style={this.props.style}>
        <div className='content'>
        {this.props.children}
        </div>
      </article>
  );
  }
}
