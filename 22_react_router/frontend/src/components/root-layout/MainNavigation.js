import classes from './MainNavigation.module.css';
import {NavLink} from "react-router";
import EventsDropDown from "./EventsDropDown";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined}>Home</NavLink>
          </li>
          <li>
            <EventsDropDown/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
