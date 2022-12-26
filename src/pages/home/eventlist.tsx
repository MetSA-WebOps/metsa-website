import React from 'react'
import eventlist from "../../content/home.json"
import "./style.css";
import Event from "./event"

const Eventlist = () => {
    return (
        <div className="event-list">
            {
                eventlist.events.map((event, i) => <Event index={i} float={i % 2 == 0 ? "flex-end" : "flex-start"} event={event} />)
            }
        </div>
    )
}

export default Eventlist
