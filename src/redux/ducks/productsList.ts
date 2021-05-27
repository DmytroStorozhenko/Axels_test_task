import { all, call, put, takeEvery } from 'redux-saga/effects';

import { fetchProducts, ProductsType } from '../../common/api';

export const GET_PRODUCTS_LIST = 'my-app/redux/GET_PRODUCTS_LIST';
const SET_PRODUCTS_LIST = 'my-app/redux/SET_PRODUCTS_LIST';

const initialState = { products: [] };

export default function productsListReducer(state: ProductsType = initialState, action: ProductsListActionsType) {
    switch (action.type) {
        case SET_PRODUCTS_LIST:
            return { ...state, products: action.payload.products }

        default:
            return state
    }
};

export const getProducts = () => ({ type: GET_PRODUCTS_LIST }) as const;
export const setProducts = (payload: ProductsType) => ({ type: SET_PRODUCTS_LIST, payload }) as const;

function* getProductsListWatcher() {
    yield takeEvery( GET_PRODUCTS_LIST, getProductsListWorker )
}

function* getProductsListWorker() {
    try {
        const response: ProductsType = yield call( fetchProducts );
        yield put( setProducts( response ) )
    } catch (error) {
        console.log( error );
    }
}

export function* productsListSaga() {
    yield all( [
        getProductsListWatcher()
    ] );
}

type getProductsType = ReturnType<typeof getProducts>
type setProductsType = ReturnType<typeof setProducts>

type ProductsListActionsType =
    getProductsType |
    setProductsType
