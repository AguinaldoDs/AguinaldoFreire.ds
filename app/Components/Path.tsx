// components/Path.js
import React from 'react';
import styles from './Path.module.css';

const Path = () => {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200" className={styles.svg}>
      <path   
        d="M 10 50 
           H 50 
           A 5 5 0 1 0 60 50
           A 5 5 0 1 0 50 50 
           H 390" 
        className={styles.path}
      />
    </svg>
  );
};

export default Path;
