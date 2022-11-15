import React from 'react';
import styles from './BigImage.module.scss';
import { createPortal } from 'react-dom';

const BigImage = (props) => {
  return createPortal(
    <div className={styles.BigImage}>
      <div>
        <img src={props.image} alt='Obraz w wysokiej rozdzielczości'></img>
        <p onClick={props.click}>&#10005;</p>
      </div>
    </div>,
    document.querySelector('#big'),
  );
};

export default BigImage;
