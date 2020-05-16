import React from "react";
import LogoBurguer from "../../assets/images/burguer-logo.png";
import styles from "./Logo.module.css";
export default function Logo(props) {
    return (
        <div className={styles.Logo}>
            <img src={LogoBurguer} alt="My Burguer" />
        </div>
    );
}
