// components/Path.js
import React from 'react';
import styles from './Path.module.css';

const Path = () => {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" className={styles.svg}>
      <path 
        d="M 10 100 H 150 A 50 50 0 1 1 250 100 H 390" 
        className={styles.path}
      />
    </svg>
  );
};

export default Path;
