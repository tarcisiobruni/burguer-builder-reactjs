import React from 'react';
import styles from './modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop';

export default function Modal(props) {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
        className={styles.Modal}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
}
