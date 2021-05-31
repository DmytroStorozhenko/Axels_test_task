import productsListReducer, { SET_PRODUCTS_LIST, setProducts } from '../../redux/ducks/productsList';
import { ProductsType } from '../../common/api';

let startState: ProductsType;

beforeEach( () => {
    startState = {
        products: [
            {
                id: 1,
                img: 'img.jpeg',
                description: 'some description',
                name: 'product 1',
                rating: '4',
                reviews: ['first review', 'second review']
            }
        ]
    }
} );

test( 'should create SET_PRODUCTS_LIST action', () => {
    const expectedAction = {
        type: SET_PRODUCTS_LIST,
        startState
    };
    const keys = Object.keys( expectedAction.startState );

    expect( Object.keys( setProducts( startState ).payload ) ).toEqual( keys )
    expect( expectedAction.type ).toEqual( SET_PRODUCTS_LIST )
} );

test( 'startState should be dispatched', () => {
    const expectedState = productsListReducer( { products: [] }, setProducts( startState ) );

    expect( expectedState.products[0].id ).toEqual( 1 )
    expect( expectedState.products[0].name ).toEqual( 'product 1' )
    expect( expectedState.products[1] ).toEqual( undefined )
} );
