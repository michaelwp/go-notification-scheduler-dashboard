import {
    FETCH_LIST_CONNECTION_START,
    FETCH_LIST_CONNECTION_SUCCESS,
    FETCH_LIST_CONNECTION_ERROR
} from '../actionTypes';

const initialState = {
    data: {},
    loading: false,
};

export const connectionReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_CONNECTION_START:
            return {
                ...state,
                loading: true,
                data: {}
            };
        case FETCH_LIST_CONNECTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_LIST_CONNECTION_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};
