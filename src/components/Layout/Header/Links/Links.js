import React from 'react';
import styles from './Links.module.scss';

import Link from './Link/Link';

const Links = (props) => {
  let style = props.style ? props.style : null;

  if (!style) {
    style = styles.Links;
  }

  return (
    <ul className={style}>
      <li onClick={props.close}>
        <Link dest='/start'>Główna</Link>
      </li>
      <li onClick={props.close}>
        <Link dest='/oferta'>Oferta</Link>
      </li>
      <li onClick={props.close}>
        <Link dest='/cennik'>Cennik</Link>
      </li>
      <li onClick={props.close}>
        <Link dest='/zamowienia'>Zamówienia</Link>
      </li>
      <li onClick={props.close}>
        <Link dest='/kontakt'>Kontakt</Link>
      </li>
    </ul>
  );
};

export default Links;
