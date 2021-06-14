import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Header } from '../../components';

const renderHeader = () => (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
)

test( 'Snapshot for Header component', () => {
    const tree = renderer
        .create(renderHeader())
        .toJSON()
    expect( tree ).toMatchSnapshot()
} );

test('Header renders correctly', () => {
    render(renderHeader())
    expect(screen.getByText('GunsPlace')).toBeInTheDocument()
})
