import React from 'react';
import styles from './Heading.module.scss';

const Heading = props => <h1 className={styles.Heading}>{props.children}</h1>;

export default Heading;
