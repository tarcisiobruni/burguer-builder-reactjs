import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './styles.module.css';
import Toolbar from './../Navigation/Toolbar';
export default function Layout(props) {
  return (
    <Auxiliary>
      <Toolbar />
      <main className={styles.Content}>{props.children}</main>
    </Auxiliary>
  );
}
