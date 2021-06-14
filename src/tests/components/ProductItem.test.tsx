import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ProductItem } from '../../components';

import { store } from '../../redux/store';

test( 'Snapshot for ProductItem component', () => {
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
