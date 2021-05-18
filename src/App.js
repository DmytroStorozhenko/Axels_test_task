import {ProductsList} from "./components/ProductsList";
import {Header} from "./components/Header";
import {ProductItem} from "./components/ProductItem";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from './common/routes';

export const App = () => {
    return (
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
}