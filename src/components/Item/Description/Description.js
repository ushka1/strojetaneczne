import React from 'react';
import styles from './Description.module.scss';

const Description = (props) => {
  return (
    <article className={styles.Description}>
      {props.data.text.map((elm, idx) => (
        <p key={idx} className={styles.Paragraph}>
          {elm}
        </p>
      ))}
      {props.children}
    </article>
  );
};

export default Description;
