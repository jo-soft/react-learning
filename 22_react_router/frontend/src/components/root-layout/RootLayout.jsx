import classes from './RootLayout.module.css';
import {NavLink, Outlet} from "react-router";
import {EventsCtxProvider} from "../../context/EventsCtx";
import EventsDropDown from "./EventsDropDown";

export  default  function RouterLayout() {

    const activeClassName = ({isActive}) => isActive ? classes.active : undefined;

    return <EventsCtxProvider>
        <nav>
            <h1>Homepage</h1>
            <NavLink className={activeClassName} to='/'>Home</NavLink>
            <EventsDropDown/>
        </nav>
        <main>
            <Outlet/>
        </main>
    </EventsCtxProvider>
}