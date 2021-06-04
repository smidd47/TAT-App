import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { results } from './results';
import { promotions } from './promotions';
import { partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            results,
            partners,
            promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}