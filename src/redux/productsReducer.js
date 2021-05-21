import { put, all, takeEvery, call } from 'redux-saga/effects'

export const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_PRODUCTS = 'SET_PRODUCTS';

const initialState = {
    products: []
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload }

        default:
            return state
    }
};

export const getProducts = () => ({ type: GET_PRODUCTS });
export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

const fetchProducts = async () => {
    const response = await fetch( 'https://demo6435853.mockable.io/products' )
    return await response.json();
};

export function* watchFetchProducts() {
    yield takeEvery( GET_PRODUCTS, getProductsSaga )
}

export function* getProductsSaga() {
        try {
            const response = yield call( fetchProducts );
            yield put( setProducts( response.products ) )
        } catch (error) {
            console.log( error );
        }
}

export function* productsRootSaga() {
    yield all( [
        watchFetchProducts()
    ] );
}
