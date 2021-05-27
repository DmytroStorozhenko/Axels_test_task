import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, ProductItem, ProductsList } from './components/index';

export const App = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={ProductsList}/>
                <Route path={'/item/:id?'} component={ProductItem}/>
            </Switch>
        </div>
    </BrowserRouter>
);
