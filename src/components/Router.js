import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Animal from './Animal';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import home

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Menu' component={Menu} />
            <Route exact path='/AnimalPage' component={Animal} />
        </Switch>
    </BrowserRouter>
)


export default Router;