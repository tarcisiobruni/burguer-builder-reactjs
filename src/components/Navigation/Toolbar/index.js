import React from 'react';
import styles from './Toolbar.module.css';
export default function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>
        <ul>
          <li>...</li>
        </ul>
      </nav>
    </header>
  );
}
