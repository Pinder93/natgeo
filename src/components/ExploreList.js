import React from 'react';
import AnimalLink from './AnimalLink';

class ExploreList extends React.Component {
  render() {
    return (
      <div className='latest-content'>
        <h2><span className='|'>|</span>LATEST STORIES</h2>
        <ul className='latest-list'>
          <li className='latest-items'>Sponsor Content</li>
          <li className='latest-items'>Culture & Exploration</li>
          <li className='latest-items'>Science & Innovation</li>
          <AnimalLink />
        </ul>
      </div>
    );
  }
}

export default ExploreList;