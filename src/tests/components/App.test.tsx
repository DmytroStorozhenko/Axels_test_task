import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import { App } from '../../App';

import { store } from '../../redux/store';

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