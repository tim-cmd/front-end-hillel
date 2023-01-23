import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';

function myLogger({ dispatch, getState }) {
    return (next) => {
        return (action) => {
            next(action);
        };
    };
}

const logger = createLogger({
    collapsed: true,
});

const middlewares = applyMiddleware(myLogger, thunk, logger);

const store = createStore(usersReducer, middlewares);

export default store;
