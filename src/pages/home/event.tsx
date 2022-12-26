type EventProps = {
    event: {
        "title": string,
        "content": string,
        "date": string
    },
    index: number,
    float: string
}

const Event = ({ event, index, float }: EventProps) => {
    return (
        <div style={{ alignSelf: float, backgroundColor: "#6ACE74" }} className="event">
            <h2>{event.title}</h2>
            <p>{event.content}</p>
        </div>
    )
}

export default Event
