import renderer from 'react-test-renderer';

import { Preloader } from '../../components';

test( 'Snapshot for Preloader component', () => {
    const tree = renderer
        .create( <Preloader/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );
