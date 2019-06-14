import React from 'react';
import Construction from '../../components/Construction';
import './style.css';

export default class Blog extends React.Component{

  render(){
    return (
      <div className='blog'>
        <Construction theName="Blog" />
      </div>
    );
  }
}
