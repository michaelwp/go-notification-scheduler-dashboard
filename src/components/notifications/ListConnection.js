import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchListNotification} from "../../store/actions/notification";
import {Spinner, Table} from "react-bootstrap";
import {fetchListConnection} from "../../store/actions/connection";


const ListConnection = () => {
    const listConnection = useSelector(state => state.connectionReducers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListConnection());
    }, [dispatch]);

    return (
        <>
            <h3>List Connection</h3>

            {
                listConnection.data.data !== undefined ?
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>UUID</th>
                                <th>Client ID</th>
                                <th>Client IP</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                                {listConnection.data.data.map(row => {
                                    return (
                                        <tr key={row.uuid}>
                                            <td>{row.uuid}</td>
                                            <td>{row.client_id}</td>
                                            <td>{row.client_ip}</td>
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

export default ListConnection;
