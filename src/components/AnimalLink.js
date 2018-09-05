import React from 'react';
import {Route} from 'react-router-dom';

const AnimalLink = () => (
    <Route render={({history}) => (
        <li className='latest-items'
        onClick={() => {history.push('/AnimalPage') }}
        >
        Animals
        </li>
    )} />
)

export default AnimalLink;