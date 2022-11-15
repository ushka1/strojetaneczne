import React from 'react';
import styles from './Footer.module.scss';

import Links from '../Header/Links/Links';
import icons from '../../../assets/icons/icons';

const Mail = icons.mail;
const Phone = icons.phone;

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h3>
        Jeżeli macie Państwo jakiekolwiek pytania, prosimy o kontakt z nami:
      </h3>
      <div className={styles.Info}>
        <ul className={styles.Contact}>
          <li>
            <Mail></Mail>
            <a href='mailto:angelinaprajzner@gmail.com'>
              angelinaprajzner@gmail.com
            </a>
          </li>
          <li>
            <Phone></Phone>
            <a href='tel:+48519113426'>+48 519-113-426</a>
          </li>
        </ul>
        <Links style={styles.Links}></Links>
      </div>
    </footer>
  );
};

export default Footer;
