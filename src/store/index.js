import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from "./middlewares"
import {
    notificationReducers,
} from './reducers/notification';

import {
    connectionReducers,
} from './reducers/connection';

const rootReducers = combineReducers({
    notificationReducers,
    connectionReducers
});

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);

export default store;
