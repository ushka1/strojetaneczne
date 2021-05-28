import React from 'react';
import styles from './BigImage.module.scss';

const BigImage = (props) => (
  <div className={styles.BigImage}>
    <div>
      <img src={props.image} alt='Obraz w wysokiej rozdzielczości'></img>
      <p onClick={props.click}>&#10005;</p>
    </div>
  </div>
);

export default BigImage;
