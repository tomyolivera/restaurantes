import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Restaurantes from './Components/Restaurantes';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Restaurantes} />
            </Switch>
        </BrowserRouter>
    );
}

export default RouterApp