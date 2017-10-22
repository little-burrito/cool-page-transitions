import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const Main = (props) => (
    <main { ...props }>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/1/' component={Page1} />
            <Route exact path='/2/' component={Page2} />
            <Route exact path='/3/' component={Page3} />
        </Switch>
    </main>
);

export default Main;