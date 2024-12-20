import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header.backgorund";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image
                        width="1024"
                        height="1024"
                        src={logoImage.src}
                        alt="the foodie logo"
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
