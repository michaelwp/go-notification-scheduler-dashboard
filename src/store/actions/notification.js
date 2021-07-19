import {
    FETCH_LIST_NOTIFICATION_START,
    FETCH_LIST_NOTIFICATION_SUCCESS,
    FETCH_LIST_NOTIFICATION_ERROR
} from '../actionTypes';

import axios from "axios";

export const fetchListNotification = () => (dispatch) => {
    let data = {};

    dispatch({
        type: FETCH_LIST_NOTIFICATION_START,
        payload: null
    });

    // get data from notification server
    axios
        .get('http://localhost:3000/notifications')
        .then(response => {
            data = response.data
            dispatch({
                type: FETCH_LIST_NOTIFICATION_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_LIST_NOTIFICATION_ERROR,
                payload: err
            })
        });
};
