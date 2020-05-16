import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

export default function Toolbar(props) {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawToggleClicked} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}
