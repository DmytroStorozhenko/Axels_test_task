import { ProductItemType } from '../../common/api';
import productReducer, {
    ADD_REVIEW, addReview,
    GET_PRODUCT,
    getProduct,
    SET_PRODUCT, SET_REVIEW,
    setProduct,
    setReview
} from '../../redux/ducks/product';

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

describe( 'productItem action creators tests ', () => {

    test( 'getProducts should create action with GET_PRODUCT', () => {
        const action = getProduct( 1 );

        expect( action.type ).toEqual( GET_PRODUCT )
        expect( action.id ).toEqual( 1 )
    } );

    test( 'addReview should create action with ADD_REVIEW', () => {
        const action = addReview( 'new review' );

        expect( action.type ).toEqual( ADD_REVIEW )
        expect( action.review ).toEqual( 'new review' )
    } );

    test( 'setProduct should create action with SET_PRODUCT ', () => {
        const action = setProduct( startState );
        const actionKeys = Object.keys( action.payload );
        const expectedKeys = Object.keys( startState );

        expect( action.type ).toEqual( SET_PRODUCT )
        expect( actionKeys ).toEqual( expectedKeys )
    } );

    test( 'setReview should create action with SET_REVIEW ', () => {
        const action = setReview( 'new review' );

        expect( action.type ).toEqual( SET_REVIEW )
        expect( action.review ).toEqual( 'new review' )
    } );

} )

describe( 'productItem reducer tests', () => {
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

    test( 'new review should be dispatched', () => {
        const expectedState = productReducer( startState, setReview( 'new review' ) );

        expect( expectedState.reviews[0] ).toEqual( 'new review' )
        expect( expectedState.reviews[1] ).toEqual( 'first review' )
        expect( expectedState.reviews[3] ).toEqual( undefined )
    } );
} )
