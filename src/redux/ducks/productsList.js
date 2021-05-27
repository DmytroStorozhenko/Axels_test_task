import { put, all, takeEvery, call } from 'redux-saga/effects'

import { fetchProducts } from '../../common/api';

export const GET_PRODUCTS_LIST = 'my-app/redux/GET_PRODUCTS_LIST';
const SET_PRODUCTS_LIST = 'my-app/redux/SET_PRODUCTS_LIST';

const initialState = {
    products: []
};

export default function productsListReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS_LIST:
            return { ...state, products: action.payload }

        default:
            return state
    }
}

export const getProducts = () => ({ type: GET_PRODUCTS_LIST });
export const setProducts = (payload) => ({ type: SET_PRODUCTS_LIST, payload });

function* getProductsListWatcher() {
    yield takeEvery( GET_PRODUCTS_LIST, getProductsListWorker )
}

function* getProductsListWorker() {
        try {
            const response = yield call( fetchProducts );
            yield put( setProducts( response.products ) )
        } catch (error) {
            console.log( error );
        }
}

export function* productsListSaga() {
    yield all( [
        getProductsListWatcher()
    ] );
}
