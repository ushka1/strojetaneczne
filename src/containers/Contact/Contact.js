import React from 'react';
import styles from './Contact.module.scss';

import Heading from '../../components/UI/Heading/Heading';
import icons from '../../assets/icons/icons';
import { Helmet } from 'react-helmet';

const Mail = icons.mail;
const Phone = icons.phone;

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Stroje Taneczne - kontakt</title>
      </Helmet>
      <section className={styles.Contact}>
        <Heading>Kontakt</Heading>
        <h2>W razie jakichkolwiek pytań zachęcamy państwa do kontaktu. </h2>
        <h3>Z chęcią odpowiemy na wszystkie państwa pytania.</h3>
        <ul>
          <li>
            <p>Adres E-Mail:</p>
            <Mail></Mail>
            <a href='mailto:angelinaprajzner@gmail.com'>
              angelinaprajzner@gmail.com
            </a>
          </li>
          <li>
            <p>Telefon komórkowy:</p>
            <Phone></Phone>
            <a href='tel:+48519113426'>+48 519-113-426</a>
          </li>
        </ul>
        <p>Jesteśmy dostępni w godzinach 8.00 - 18.00.</p>
      </section>
    </>
  );
};

export default Contact;
