import React from 'react';

import styles from './Layout.module.scss';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

class Layout extends React.Component {
  render() {
    return (
      <main className={styles.Layout}>
        <Header></Header>
        <div className={styles.Content}>{this.props.children}</div>
        <Footer></Footer>
      </main>
    );
  }
}

export default Layout;
