import React from 'react';
import styles from './Logo.module.scss';

import LogoImage from '../../../assets/images/logo.png';

const Logo = () => (
  <img className={styles.Logo} src={LogoImage} alt='tańcząca para'></img>
);

export default Logo;
