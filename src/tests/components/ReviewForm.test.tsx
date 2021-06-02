import renderer from 'react-test-renderer';

import { ReviewForm } from '../../components';
import { addReview } from '../../redux/ducks/product';

test( 'ReviewForm renders correctly', () => {
    const submitHandler = (review: string) => addReview( review );
    const tree = renderer
        .create( <ReviewForm submitHandler={submitHandler}/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );
