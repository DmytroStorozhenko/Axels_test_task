import renderer from 'react-test-renderer';

import { Preloader } from '../../components';

test( 'Preloader renders correctly', () => {
    const tree = renderer
        .create( <Preloader/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );
