import React from "react";
import ListNotification from "../components/notifications/ListNotification";
import ListConnection from "../components/notifications/ListConnection";

const Home = () => {
    return(
        <>
            <h2>Notification Scheduler Dashboard</h2>
            <ListNotification />
            <ListConnection />
        </>
    )
}

export default Home;
