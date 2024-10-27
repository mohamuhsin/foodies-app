import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
    return (
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
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
