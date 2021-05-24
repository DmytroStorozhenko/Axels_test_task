import { put, all, takeEvery, call } from 'redux-saga/effects'

import { fetchProducts } from '../common/helpers';

export const GET_PRODUCT = 'GET_PRODUCT';
const SET_PRODUCT = 'SET_PRODUCT';

const initialState = {};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, ...action.payload }

        default:
            return state
    }
};

export const getProduct = (id) => ({ type: GET_PRODUCT, id });
export const setProduct = (payload) => ({ type: SET_PRODUCT, payload });

function* watchFetchProduct() {
    yield takeEvery( GET_PRODUCT, getProductsSaga )
}

function* getProductsSaga(args) {
    try {
        const response = yield call( fetchProducts );
        yield put( setProduct( response.products[args.id] ) )
        debugger
    } catch (error) {
        console.log( error );
    }
}

export function* productSaga() {
    yield all( [
        watchFetchProduct()
    ] );
}
