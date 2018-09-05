import React from 'react';
import Header from './Header';
import AnimalLink from './AnimalLink';

class Menu extends React.Component {
    render() {
      return (
       <div className='menu-container'>
       <Header />
        <h1>Menu</h1>
        <AnimalLink />
       </div>
      );
    }
  }
  
  export default Menu;