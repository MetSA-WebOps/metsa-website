import { useNavigate } from "react-router-dom"

type EventProps = {
    event: {
        "title": string,
        "content": string,
        "date": string
    },
    index: number,
}

const Event = ({ event, index }: EventProps) => {
    console.log(index);
    const navigator = useNavigate();
    const onClick = () => {
        navigator(`event/:${index}`)
    }
    return (
        <div className={`event ${index % 2 == 0 ? "right-event" : "left-event"}`}>
            <div style={{ backgroundColor: "#6ACE74" }} className="event-content" onClick={onClick}>
                <h2>{event.title}</h2>
                <p>{event.content}</p>
            </div>
            <div className="date">
                <h1 style={{ margin: "0" }}>{event.date.split(" ")[0]}</h1>
                <h3 style={{ margin: "0" }}>{event.date.split(" ")[1]}</h3>
            </div>
        </div >
    )
}

export default Event
