import React from 'react';
import Header from './Header';

class Animal extends React.Component {
    render() {
      return (
        <div className='animals'>
        <Header />
            <h1>Here is an elephant</h1>
            <div className='image-section'>
            <div>
                <img className='elephant-image' src='https://bit.ly/2MRnGb5' alt='elephant'></img>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default Animal;