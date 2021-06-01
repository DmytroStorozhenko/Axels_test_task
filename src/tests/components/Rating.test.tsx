import renderer from 'react-test-renderer';

import { Rating } from '../../components';

test( 'Rating renders correctly', () => {
    const tree = renderer
        .create( <Rating/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );
