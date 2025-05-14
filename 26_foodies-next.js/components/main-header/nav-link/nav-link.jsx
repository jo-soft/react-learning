'use client';
import classes from './pages.module.css';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink({ children, href, ...props }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={pathname.startsWith(href) ? `${classes['nav-link']} ${classes.active}` : classes['nav-link']}
            {...props}
        >
            { children }
        </Link>
    )
}