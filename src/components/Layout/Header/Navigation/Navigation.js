import React from 'react';

import Links from '../Links/Links';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Links></Links>
    </nav>
  );
};

export default Navigation;
