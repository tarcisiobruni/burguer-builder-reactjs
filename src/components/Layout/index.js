import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import styles from "./styles.module.css";
import Toolbar from "./../Navigation/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer";

export default class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar drawToggleClicked={this.sideDrawerOpenHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </Auxiliary>
        );
    }
}
