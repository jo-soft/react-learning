import events from "../events.json";
import {createContext} from "react";

export const EVENT_CTX = createContext({
    events: []
});

export function EventsCtxProvider({children}) {
    return (
        <EVENT_CTX.Provider value={{events}}>
            {children}
        </EVENT_CTX.Provider>
    )
}

