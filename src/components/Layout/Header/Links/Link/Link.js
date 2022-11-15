import React from 'react';
import styles from './Link.module.scss';
import { NavLink } from 'react-router-dom';

const Link = props => {
  return (
    <NavLink activeClassName={styles.active} to={props.dest}>
      {props.children}
    </NavLink>
  );
};

export default Link;
