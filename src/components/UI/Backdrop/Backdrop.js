import React from 'react';
import styles from './Backdrop.module.scss';

const Backdrop = props => {
  let classes = [styles.Backdrop];
  if (props.open) {
    classes.push(styles.Open);
  }

  return <div className={classes.join(' ')} onClick={props.click}></div>;
};

export default Backdrop;
