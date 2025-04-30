import { useParams } from "react-router";

export  default function EditEvent() {

    const { eventId } = useParams()

    return (
        <h2>
            Edit Event {eventId}
        </h2>
    )
}