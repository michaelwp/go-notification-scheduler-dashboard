import {
    FETCH_LIST_NOTIFICATION_START,
    FETCH_LIST_NOTIFICATION_SUCCESS,
    FETCH_LIST_NOTIFICATION_ERROR
} from '../actionTypes';

const initialState = {
    data: {},
    loading: false,
};

export const notificationReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_NOTIFICATION_START:
            return {
                ...state,
                loading: true,
                data: {}
            };
        case FETCH_LIST_NOTIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_LIST_NOTIFICATION_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state;
    }
};
