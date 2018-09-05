import React from 'react';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        
          <HomeButton />
        
        <ul className='nav'>
          <li className='menu'>Subscribe</li>
          <li className='menu'>A</li>
          <li className='menu'>S</li>
          <li className='menu'><MenuButton /></li>
        </ul>
      </div>
    );
  }
}

export default Header;