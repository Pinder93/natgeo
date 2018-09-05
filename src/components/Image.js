import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div className='image-section'>
        <div>
        <img className='beach-image' src='https://bit.ly/2Q21vwJ' alt='beach'></img>
        </div>
        <p className='line'>__</p>
      </div>
    );
  }
}

export default Image;