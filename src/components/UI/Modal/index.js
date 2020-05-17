import React, { Component } from "react";
import styles from "./modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop";

export default class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log("[Modal] WillUpdate");
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0",
                    }}
                    className={styles.Modal}
                >
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}
