import React from 'react';
import styles from './Offer.module.scss';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Banner from '../../components/Offer/Banner/Banner';
import Offers from '../../components/Offer/Offers/Offers';
import Item from '../Item/Item';

import * as actions from '../../Store/Actions/Index';

class Offer extends React.Component {
  componentWillUnmount() {
    this.props.clearPosition();
  }

  render() {
    return (
      <section className={styles.Offer}>
        <Route path='/oferta/:id'>
          <Item></Item>
        </Route>
        <Route path='/oferta' exact>
          <Banner></Banner>
          <Offers></Offers>
        </Route>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearPosition: () => dispatch(actions.clearPosition()),
  };
};

export default connect(null, mapDispatchToProps)(Offer);
