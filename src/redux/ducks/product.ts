import { all, call, put, takeEvery } from 'redux-saga/effects'

import { fetchProducts, ProductItemType, ProductsType } from '../../common/api';

export const GET_PRODUCT = 'my-app/redux/GET_PRODUCT';
export const ADD_REVIEW = 'my-app/redux/ADD_REVIEW';
const SET_PRODUCT = 'my-app/redux/SET_PRODUCT';
const SET_REVIEW = 'my-app/redux/SET_REVIEW';

const initialState = {
    id: null,
    name: '',
    img: '',
    description: '',
    rating: null,
    reviews: []
};

export default function productReducer(state = initialState, action: ProductActionsType) {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, ...action.payload }
        case SET_REVIEW:
            return { ...state, reviews: [action.review, ...state.reviews] }
        default:
            return state
    }
};


export const getProduct = (id: number) => ({ type: GET_PRODUCT, id }) as const;
export const addReview = (review: string) => ({ type: ADD_REVIEW, review }) as const;
const setProduct = (payload: ProductItemType) => ({ type: SET_PRODUCT, payload }) as const;
const setReview = (review: string) => ({ type: SET_REVIEW, review }) as const;

function* getProductsWatcher() {
    yield takeEvery( GET_PRODUCT, getProductsWorker )
}

function* getProductsWorker(action: getProductActionType) {
    try {
        const response: ProductsType = yield call( fetchProducts );
        yield put( setProduct( response.products[action.id] ) )
    } catch (error) {
        console.log( error );
    }
}

function* addReviewWatcher() {
    yield takeEvery( ADD_REVIEW, addReviewWorker )
}

function* addReviewWorker(action: addReviewActionType) {
    try {
        yield put( setReview( action.review ) )
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


export type addReviewActionType = ReturnType<typeof addReview>
type getProductActionType = ReturnType<typeof getProduct>
type setProductActionType = ReturnType<typeof setProduct>
type setReviewActionType = ReturnType<typeof setReview>

type ProductActionsType =
    getProductActionType |
    setProductActionType |
    addReviewActionType |
    setReviewActionType
