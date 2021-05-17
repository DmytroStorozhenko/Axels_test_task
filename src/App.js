import {ProductsList} from "./components/productList/ProductsList";
import {Header} from "./components/Header/Header";
import {ProductItem} from "./components/productItem/ProductItem";

export const App = () => {
    return (
        <div>
            <Header />
            <ProductsList />
            <ProductItem />
        </div>
    );
}

export default App;
