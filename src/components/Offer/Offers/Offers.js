import React, { useEffect } from 'react';
import styles from './Offers.module.scss';
import { connect } from 'react-redux';

import Offer from './Offer/Offer';
import { getImagePath } from '../../../utility/imagePath';

const Offers = (props) => {
  useEffect(() => {
    if (props.position) {
      window.scrollTo(0, props.position);
    }
  }, [props.position]);

  let offers = null;

  if (props.items) {
    offers = props.items.map((elm) => {
      return (
        <Offer
          id={elm.id}
          title={elm.title}
          key={elm.title}
          image={getImagePath(elm.id, 0).src}
          image2={getImagePath(elm.id, 1).src}
        >
          {elm.title}
        </Offer>
      );
    });
  }

  return <ul className={styles.Offers}>{offers}</ul>;
};

const mapStateToProps = (state) => {
  return {
    items: state.fetch.items,
    position: state.position.position,
  };
};

export default connect(mapStateToProps, null)(Offers);
