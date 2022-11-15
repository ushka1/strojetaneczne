import React from 'react';
import styles from './Header.module.scss';

import Navigation from './Navigation/Navigation';
import SideDrawer from './SideDrawer/SideDrawer';
import Logo from '../../UI/Logo/Logo';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Title}>
        <Logo></Logo>
        <Link to='/start'>
          <h1>
            Anne <span>Dance</span> Studio
          </h1>
        </Link>
      </div>
      <Navigation></Navigation>
      <SideDrawer></SideDrawer>
    </header>
  );
};

export default Header;
