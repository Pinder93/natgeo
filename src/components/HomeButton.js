import React from 'react';
import {Route} from 'react-router-dom';

class HomeButton extends React.Component {
  render() {
    return (
        <Route render={({history}) => (
            <div className='logo-container'>
                <img className='logo' src='https://bit.ly/2wBrq6A' alt='National Geographic Logo'
                onClick={() => {history.push('/') }}
                >
                </img>
            </div>
        )} />
    );
  }
}

export default HomeButton;