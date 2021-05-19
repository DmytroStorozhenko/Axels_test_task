import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { routes } from './common/routes';

import { Header, ProductItem, ProductsList } from './components/index';

export const App = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path={routes.productList} component={ProductsList}/>
                <Route path={routes.productItem} component={ProductItem}/>
            </Switch>
        </div>
    </BrowserRouter>
);
