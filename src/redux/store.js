import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { productsReducer, productsRootSaga } from './productsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers( {
    productsList: productsReducer
} );

export const store = createStore(rootReducer, applyMiddleware( sagaMiddleware ));

sagaMiddleware.run( productsRootSaga )
