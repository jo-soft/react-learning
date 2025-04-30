import {Link, useParams} from "react-router";

export default function Event() {

    const { eventId } = useParams()

    return (
        <>
            <h2> Event details</h2>
            <p> Event Id: { eventId } </p>
            <Link to='edit'> Edit Event</Link>
        </>
    )
}