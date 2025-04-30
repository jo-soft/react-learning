import RootLayout from "./components/root-layout/RootLayout";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Home from "./pages/Home";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import {Outlet} from "react-router";

export const ROUTES = [
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'events',
                element: <Outlet/>,
                children: [
                    {
                        index: true,
                        element: <Events/>,
                    },
                    {
                        path: ':eventId',
                        element: <Outlet/>,
                        children: [
                            {
                                index:  true,
                                element: <Event/>,
                            },
                            {
                                path: 'edit',
                                element: <EditEvent/>
                            }
                        ]
                    },
                    {
                        path: 'new-event',
                        element: <NewEvent/>
                    }
                ]
            }
        ]
    }
]