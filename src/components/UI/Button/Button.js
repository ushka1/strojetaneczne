import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={[styles.Button, styles[props.type]].join(' ')}
      onClick={props.click}
    >
      <div className={styles.hover}></div>
      <p>{props.children}</p>
    </button>
  );
};

export default Button;
