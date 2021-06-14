import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { ReviewForm } from '../../components';
import { addReview } from '../../redux/ducks/product';

const ReviewFormRender = () => {
    const submitHandler = (review: string) => addReview( review );
    return (
        <ReviewForm submitHandler={submitHandler}/>
    )
}

test( 'Snapshot for ReviewForm component', () => {
    const tree = renderer
        .create( ReviewFormRender() )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test( 'Rating renders correctly', () => {
    render( ReviewFormRender() )
    expect( screen.getByText( 'Оставить отзыв' ) ).toBeInTheDocument()
} );
