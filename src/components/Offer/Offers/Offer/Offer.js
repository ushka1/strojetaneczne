import React from 'react';
import styles from './Offer.module.scss';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../../Store/Actions/Index';
import { idToName } from '../../../../utility/imagePath';

const Offer = (props) => {
  const name = idToName(props.id);

  return (
    <li
      onClick={() => {
        props.setPosition(window.pageYOffset);
        props.history.push({
          // pathname: props.match.url + '/' + props.id,
          pathname: props.match.url + '/' + name,
        });
      }}
      className={styles.Offer}
    >
      <div className={styles.Image}>
        <img src={props.image} alt={props.title}></img>
        <img src={props.image2} alt={props.title}></img>
        <h3>{props.children}</h3>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPosition: (distance) => dispatch(actions.setPosition(distance)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Offer));
