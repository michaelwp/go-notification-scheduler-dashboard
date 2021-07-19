import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchListNotification} from "../../store/actions/notification";
import {Spinner, Table} from "react-bootstrap";


const ListNotification = () => {
    const listNotification = useSelector(state => state.notificationReducers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListNotification());
    }, [dispatch]);

    console.log(listNotification.data.data)

    return (
        <>
            <h3>List Notification</h3>

            {
                listNotification.data.data !== undefined ?
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>UUID</th>
                                <th>Client ID</th>
                                <th>Message</th>
                                <th>Schedule</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                                {listNotification.data.data.map(row => {
                                    return (
                                        <tr key={row.uuid}>
                                            <td>{row.uuid}</td>
                                            <td>{row.client_id}</td>
                                            <td>{row.message}</td>
                                            <td>{row.date_time}</td>
                                            <td>{row.status}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    : <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

            }
        </>
    )
}

export default ListNotification;
