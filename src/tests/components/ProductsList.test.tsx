import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { ProductsList } from '../../components';

import { store } from '../../redux/store';

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
