import { useNavigate } from "react-router-dom"
import eventlist from "../../content/home.json"

type EventProps = {
    event: {
        "title": string,
        "content": string,
        "date": string
    },
    index: number,
}

const Event = ({ event, index }: EventProps) => {
    const navigator = useNavigate();
    const onClick = () => {
        navigator(`event/${index}`)
    }
    const color = index < eventlist.events.length - 2 ? "#6ACE74" : "#DE5860";
    return (
        <div className={`event ${index % 2 == 0 ? "right-event" : "left-event"}`}>
            <div style={{ backgroundColor: color }} className="event-content" onClick={onClick}>
                <h2>{event.title}</h2>
                <p>{event.content}</p>
            </div>
            <div className="timeline">
                <div style={{ backgroundColor: `${index != 0 ? color : "transparent"}` }} className="vertical"></div>
                <div className="date" style={{ backgroundColor: color }}>
                    <h1 style={{ margin: "0" }}>{event.date.split(" ")[0]}</h1>
                    <h3 style={{ margin: "0" }}>{event.date.split(" ")[1]}</h3>
                </div>
                <div style={{ backgroundColor: color }} className="vertical mobile"></div>
            </div>

        </div >
    )
}

export default Event
