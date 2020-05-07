import React from 'react'
import styles from './build-control.module.css'
export default function BuildControl(props){
    const {added,removed,disable} = props;
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>
                {props.label}
            </div>
            <button disabled={disable} className={styles.Less} onClick={removed}>Less</button>
            <button className={styles.More} onClick={added}>More</button>
        </div>
    )
}