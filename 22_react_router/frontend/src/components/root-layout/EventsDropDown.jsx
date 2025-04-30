import {useContext} from "react";
import {EVENT_CTX} from "../../context/EventsCtx";
import  {NavLink, Link} from "react-router";
import classes from './EventsDropDown.module.css';
import rootLayoutClasses from './RootLayout.module.css';

export default function EventsDropDown() {
    const { events } = useContext(EVENT_CTX);

    const activeClassName = ({isActive}) => isActive ? rootLayoutClasses.active : undefined;

    return (
        <div className={classes.events}>
            <NavLink className={activeClassName} to='events'>Events</NavLink>
            <div className={classes.events_wrapper}>
                <ul className={classes.events_list}>
                    {events.map(evt => (
                        <li key={evt.id}>
                            <Link to={`events/${evt.id}`}>{evt.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}