import { ProductItemType } from '../../common/api';
import productReducer, { SET_PRODUCT, setProduct, setReview } from '../../redux/ducks/product';

let startState: ProductItemType;

beforeEach( () => {
        startState = {
            id: 1,
            img: 'img.jpeg',
            description: 'some description',
            name: 'product 1',
            rating: '4',
            reviews: ['first review', 'second review']
        }
    }
)

test( 'should create SET_PRODUCTS_LIST action', () => {
    const expectedAction = {
        type: SET_PRODUCT,
        startState
    };
    const keys = Object.keys( expectedAction.startState );

    expect( Object.keys( setProduct( startState ).payload ) ).toEqual( keys )
    expect( expectedAction.type ).toEqual( SET_PRODUCT )
} );

test( 'startState should be dispatched', () => {
    const initialState = {
        id: null,
        name: '',
        img: '',
        description: '',
        rating: null,
        reviews: []
    };
    const expectedState = productReducer( initialState, setProduct( startState ) );

    expect( expectedState.rating ).toEqual( '4' )
    expect( expectedState.description ).toEqual( 'some description' )
} );

test( 'review should be dispatched', () => {
    const expectedState = productReducer( startState, setReview( 'new review' ) );

    expect( expectedState.reviews[0] ).toEqual( 'new review' )
    expect( expectedState.reviews[1] ).toEqual( 'first review' )
    expect( expectedState.reviews[3] ).toEqual( undefined )
} );
