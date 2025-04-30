import  classes from './RootLayout.module.css';
import {EventsCtxProvider} from "../../context/EventsCtx";
import MainNavigation from "./MainNavigation";
import {Outlet} from "react-router";

export  default  function RouterLayout() {

    return <EventsCtxProvider>
        <MainNavigation/>
        <main className={classes.main}>
            <Outlet/>
        </main>
    </EventsCtxProvider>
}