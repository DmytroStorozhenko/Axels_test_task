import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ProductsList, ProductItem, Header, Preloader } from './components';

const LazyProductList = lazy( () => import('./components/index')
    .then( ({ ProductsList }) => ({ default: ProductsList }) )
);

const LazyProductItem = lazy( () => import('./components/index')
    .then( ({ ProductItem }) => ({ default: ProductItem }) )
);

export const App = () => (
    <React.Suspense fallback={<Preloader/>}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <LazyProductList/>}/>
                    <Route exact path={'/item/:id?'} render={() => <LazyProductItem/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    </React.Suspense>
);
