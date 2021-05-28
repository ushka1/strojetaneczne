import React from 'react';
import styles from './Admin.module.scss';
import { connect } from 'react-redux';
import * as Actions from '../../../Store/Actions/Index';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Heading from '../../../components/UI/Heading/Heading';
import axios from '../../../api/api';

class Admin extends React.Component {
  updatePrices = () => {
    if (!this.props.token) {
      alert('Token wygasł');
      return;
    }

    const token = this.props.token;

    axios
      .put('/prices.json?auth=' + token, { ...this.props.prices })
      .then((res) => {
        if (res.status === 200) {
          alert('Dane zaktualizowano pomyślnie.');
        } else {
          alert('Wystąpił błąd podczas aktualizacji danych.');
        }
      });
  };

  onChangeHandler = (product, size, e) => {
    const newValue = e.target.value;
    this.props.updatePrices(product, size, newValue);
    this.setState({});
  };

  render() {
    let rozmiary = [
      122, 128, 134, 140, 146, 152, 158, 164, 170, 176, 180, 185, 190, 195,
    ];

    let rozmiarowka = null;
    let table = <Spinner></Spinner>;
    let button = null;

    if (this.props.prices) {
      button = (
        <Button type='accept' click={this.updatePrices}>
          Zatwierdź
        </Button>
      );

      rozmiarowka = (
        <li>
          <p>Wzrost/Rozmiar</p>
          {rozmiary.map((elm) => {
            return (
              <input
                defaultValue={elm}
                style={{ pointerEvents: 'none' }}
                key={elm}
              ></input>
            );
          })}
        </li>
      );

      table = this.props.prices.map((item, product) => {
        return (
          <li key={product}>
            <p>{item.title}</p>
            {item.prices.map((price, size) => {
              return (
                <input
                  key={size}
                  value={price}
                  onChange={this.onChangeHandler.bind(this, product, size)}
                ></input>
              );
            })}
          </li>
        );
      });
    }

    return (
      <section className={styles.Container}>
        <Heading>Konfiguracja</Heading>
        <p className={styles.Helper}>&larr; Przewiń &rarr;</p>
        <div className={styles.Admin}>
          <ul className={styles.Table}>
            {rozmiarowka}
            {table}
          </ul>
        </div>
        {button}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    prices: state.fetch.prices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePrices: (product, size, newValue) =>
      dispatch(Actions.updatePrices(product, size, newValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
