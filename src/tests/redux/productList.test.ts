import productsListReducer, {
    GET_PRODUCTS_LIST,
    getProducts,
    SET_PRODUCTS_LIST,
    setProducts
} from '../../redux/ducks/productsList';
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

describe( 'productsList action creators tests', () => {
    test( 'getProduct should create action with GET_PRODUCTS_LIST', () => {
        expect( getProducts().type ).toEqual( GET_PRODUCTS_LIST )
    } );

    test( 'setProducts should create action with SET_PRODUCTS_LIST ', () => {
        const action = setProducts( startState );
        const actionKeys = Object.keys( action.payload.products[0] );
        const expectedKeys = Object.keys( startState.products[0] );

        expect( action.type ).toEqual( SET_PRODUCTS_LIST )
        expect( actionKeys ).toEqual( expectedKeys )
    } );
} )


describe( 'productsList reducer tests', () => {
    test( 'startState should be dispatched', () => {
        const expectedState = productsListReducer( { products: [] }, setProducts( startState ) );

        expect( expectedState.products[0].id ).toEqual( 1 )
        expect( expectedState.products[0].name ).toEqual( 'product 1' )
        expect( expectedState.products[1] ).toEqual( undefined )
    } );
} )
