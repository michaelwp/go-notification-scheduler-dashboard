import {
    FETCH_LIST_CONNECTION_START,
    FETCH_LIST_CONNECTION_SUCCESS,
    FETCH_LIST_CONNECTION_ERROR,
} from '../actionTypes';

import axios from "axios";

export const fetchListConnection = () => (dispatch) => {
    let data = {};

    dispatch({
        type: FETCH_LIST_CONNECTION_START,
        payload: null
    });

    // get data from notification server
    axios
        .get('http://localhost:3000/ws/connections')
        .then(response => {
            data = response.data
            dispatch({
                type: FETCH_LIST_CONNECTION_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_LIST_CONNECTION_ERROR,
                payload: err
            })
        });
};
