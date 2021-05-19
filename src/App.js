import { ProductsList, ProductItem, Header } from './components/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './common/routes';

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