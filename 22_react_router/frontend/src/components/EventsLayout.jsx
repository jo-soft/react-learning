import {Outlet} from "react-router";
import EventsNavigation from "./EventsNavigation";

export default function EventsLayout() {
    return (
        <>
            <EventsNavigation/>
            <Outlet/>
        </>
    )
}