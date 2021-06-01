import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProductsList, ProductItem, Header, Preloader } from './components';

const LazyProductsList = lazy( () => import('./components/index')
    .then( ({ ProductsList }) => ({ default: ProductsList }) )
);
const LazyProductItem = lazy( () => import('./components/index')
    .then( ({ ProductItem }) => ({ default: ProductItem }) )
);

export const App = () => (
    <React.Suspense fallback={<Preloader/>}>
        <Router>
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <LazyProductsList/>}/>
                <Route exact path={'/item/:id?'} render={() => <LazyProductItem/>}/>
            </Switch>
        </Router>
    </React.Suspense>
);
