import { put, all, takeEvery, call } from 'redux-saga/effects'

import { fetchProducts } from '../common/helpers';

export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
const SET_PRODUCTS_LIST = 'SET_PRODUCTS_LIST';

const initialState = {
    products: []
};

export const productsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_LIST:
            return { ...state, products: action.payload }

        default:
            return state
    }
};

export const getProducts = () => ({ type: GET_PRODUCTS_LIST });
export const setProducts = (payload) => ({ type: SET_PRODUCTS_LIST, payload });

function* watchFetchProducts() {
    yield takeEvery( GET_PRODUCTS_LIST, getProductsListSaga )
}

function* getProductsListSaga() {
        try {
            const response = yield call( fetchProducts );
            yield put( setProducts( response.products ) )
        } catch (error) {
            console.log( error );
        }
}

export function* productsListSaga() {
    yield all( [
        watchFetchProducts()
    ] );
}
