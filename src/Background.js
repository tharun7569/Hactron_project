import React, { Component } from 'react'
import Signup from './Signup';

class Background extends Component {
  render() {
    return (
        <div className='now'>
        <div className='back'></div>
        <div className="container1">
        <div className="log"></div>
            <Signup />
            
        </div>
      </div>
    
    );
  }
}

export default Background