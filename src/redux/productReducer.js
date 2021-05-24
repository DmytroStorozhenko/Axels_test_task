import { put, all, takeEvery, call } from 'redux-saga/effects'

import { fetchProducts } from '../common/helpers';

export const GET_PRODUCT = 'my-app/redux/GET_PRODUCT';
export const ADD_REVIEW = 'my-app/redux/ADD_REVIEW';
const SET_PRODUCT = 'my-app/redux/SET_PRODUCT';

const initialState = {};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, ...action.payload }
        case ADD_REVIEW:
            return { ...state, reviews: [ [...action.review], ...state.reviews] }
        default:
            return state
    }
};

export const getProduct = (id) => ({ type: GET_PRODUCT, id })
export const setProduct = (payload) => ({ type: SET_PRODUCT, payload })
export const addReview = (review) => ({ type: ADD_REVIEW, review })

function* getProductsWatcher() {
    yield takeEvery( GET_PRODUCT, getProductsWorker )
}

function* getProductsWorker(args) {
    try {
        const response = yield call( fetchProducts );
        yield put( setProduct( response.products[args.id] ) )
    } catch (error) {
        console.log( error );
    }
}

function* addReviewWatcher() {
    yield takeEvery( ADD_REVIEW, addReviewWorker )
}

function* addReviewWorker(review) {
    try {
        yield put( addReview( review ) )
        debugger
    } catch (error) {
        console.log( error )
    }
}

export function* productSaga() {
    yield all( [
        getProductsWatcher(),
        addReviewWatcher()
    ] );
}
