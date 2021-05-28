import React from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = (props) => (
  <>
    <input
      ref={props.reference}
      type='checkbox'
      id='hamburger'
      className={styles.Checker}
    ></input>
    <label
      onClick={props.click}
      htmlFor='hamburger'
      className={styles.Hamburger}
    >
      <span></span>
      <span></span>
      <span></span>
    </label>
  </>
);

export default Hamburger;
