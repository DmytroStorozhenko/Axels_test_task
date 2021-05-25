import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import productsReducer, { productSaga } from './ducks/product';
import productsListReducer, { productsListSaga } from './ducks/productsList';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers( {
    productsList: productsListReducer,
    product: productsReducer
} );

export const store = createStore(rootReducer, applyMiddleware( sagaMiddleware ));

sagaMiddleware.run( productsListSaga )
sagaMiddleware.run( productSaga )
