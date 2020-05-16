import React from "react";
import Logo from "../../Logo";
import NavigationItems from "./../NavigationItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

export default function SideDrawer(props) {
    let attachedStyles = [styles.SideDrawer, styles.Close];
    const { open } = props;
    if (open) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={open} clicked={props.closed} />
            <div className={attachedStyles.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
}
