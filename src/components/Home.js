import React from 'react';
import Header from './Header';
import Info from './Info';
import Image from './Image';
import ExploreList from './ExploreList';

class Home extends React.Component {
    render() {
      return (
       <div className='Home'>
        <Header />
        <Info />
        <Image />
        <ExploreList />
       </div>
      );
    }
  }
  
  export default Home;