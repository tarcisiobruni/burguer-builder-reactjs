import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import styles from './styles.module.css'

export default function Layout(props) {
    return (
        <Auxiliary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}