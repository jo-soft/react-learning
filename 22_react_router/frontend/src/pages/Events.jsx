import {Link} from "react-router";
import {useContext} from "react";
import {EVENT_CTX} from "../context/EventsCtx";
export default function Event() {

    const { events } = useContext(EVENT_CTX)

    return (
        <section>
            <Link to='new-event'>New Event</Link>

            <div>
            {
                events.map(evt => (
                    <div key={evt.id}>
                        <h2>{evt.title}</h2>
                        <Link to={`${evt.id}`}>Details</Link>
                    </div>
                ))
            }
            </div>
        </section>
    )
}