import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Rating } from '../../components';

test( 'Snapshot for Rating component', () => {
    const tree = renderer
        .create( <Rating/> )
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test ('Rating renders correctly', () => {
    render( <Rating/> )
    expect(screen.getByText('Поставить оценку')).toBeInTheDocument()
});
