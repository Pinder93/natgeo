import React from 'react';
import {Route} from 'react-router-dom';

const MenuButton = () => (
    <Route render={({history}) => (
        <button type='button'
        onClick={() => {history.push('/Menu') }}
        >
        Menu
        </button>
    )} />
)

export default MenuButton;



