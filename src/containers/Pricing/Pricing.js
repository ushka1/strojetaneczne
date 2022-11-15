import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Pricing.module.scss';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Heading from '../../components/UI/Heading/Heading';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.tableRef = React.createRef();
  }

  componentDidMount() {
    this.func = this.tableHelper.bind(this);
    this.tableRef.current.addEventListener('mousemove', this.func);
  }

  tableHelper = (e) => {
    if (e.target.closest('li')) {
      const target = e.target.closest('li');
      const string = 'Wrap' + target.id;
      this.wrapperRef.current.className = '';
      this.wrapperRef.current.className = styles[string];
    } else {
      this.wrapperRef.current.className = '';
    }
  };

  componentWillUnmount() {
    this.tableRef.current.removeEventListener('mousemove', this.func);
  }

  render() {
    let rozmiary = [
      122, 128, 134, 140, 146, 152, 158, 164, 170, 176, 180, 185, 190, 195,
    ];

    let rozmiarowka = null;

    let table = <Spinner></Spinner>;

    let podwojneKolo = (title) => (
      <>
        {title} <span>{'(+30zł za podwójne koło)'}</span>
      </>
    );

    if (this.props.prices) {
      rozmiarowka = (
        <ul>
          <li className={styles.title}>Wzrost/Rozmiar</li>
          {rozmiary.map((elm, idx) => {
            return (
              <li id={'No' + idx} key={elm}>
                {elm} cm
              </li>
            );
          })}
        </ul>
      );

      table = this.props.prices.map((item, product) => {
        return (
          <ul key={product}>
            <li className={styles.title}>
              {item.title.match(/^Sukienka (lycra|z koronką)$/)
                ? podwojneKolo(item.title)
                : item.title}
            </li>
            {item.prices.map((price, size) => {
              return (
                <li id={'No' + size} key={size}>
                  {price} zł
                </li>
              );
            })}
          </ul>
        );
      });
    }

    return (
      <>
        <Helmet>
          <title>Stroje Taneczne - cennik</title>
        </Helmet>
        <section className={styles.Container}>
          <div ref={this.wrapperRef}>
            <Heading>Cennik</Heading>
            <p className={styles.Helper}>&larr; Przewiń &rarr;</p>
            <div ref={this.tableRef} className={styles.Pricing}>
              <ul className={styles.Table}>
                {rozmiarowka}
                {table}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prices: state.fetch.prices,
  };
};

export default connect(mapStateToProps, null)(Pricing);
