import classes from './main-header.module.css'
import logo from '@/assets/logo.png';
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/background/main-header-background";
import NavLink from "@/components/main-header/nav-link/nav-link";

export  default function MainHeader() {
    return (
        <header className={classes.header}>
            <MainHeaderBackground/>
            <Link className={classes.logo} href='/'>
                <Image priority='priority' src={logo} alt="logo"/>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Meals</NavLink>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}