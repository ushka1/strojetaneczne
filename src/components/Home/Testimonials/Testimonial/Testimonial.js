import React from 'react';
import styles from './Testimonial.module.scss';
import images from '../../../../assets/images/users/images';

const Testimonial = (props) => {
  return (
    <li className={styles.Testimonial}>
      <img src={images[props.gender]} alt='kupujący' />
      <p>{props.author}</p>
      <p>{props.children}</p>
    </li>
  );
};

export default Testimonial;
