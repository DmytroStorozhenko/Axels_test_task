import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Header, Preloader, ProductItem, ProductsList, Rating, ReviewForm } from '../../components';
import { addReview } from '../../redux/ducks/product';

import { store } from '../../redux/store';
import { App } from '../../App';

test( 'Header renders correctly', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Header/>
            </BrowserRouter> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'Preloader renders correctly', () => {
    const tree = renderer
        .create( <Preloader/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'ProductsList renders correctly', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <ProductsList/>
            </Provider>
        )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'ProductsItem renders correctly', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <BrowserRouter>
                    <ProductItem/>
                </BrowserRouter>
            </Provider>
        )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'Rating renders correctly', () => {
    const tree = renderer
        .create( <Rating/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'ReviewForm renders correctly', () => {
    const submitHandler = (review: string) => addReview( review );
    const tree = renderer
        .create( <ReviewForm submitHandler={submitHandler}/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'App renders correctly', () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <App/>
            </Provider>
        )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );
