import React from 'react';
import styles from './Sizer.module.scss';

const sizes = [
  122,
  128,
  134,
  140,
  146,
  152,
  158,
  164,
  170,
  176,
  180,
  185,
  190,
  195,
];

class Sizer extends React.Component {
  state = {
    current: 0,
  };

  onSelectChange = (e) => {
    this.setState({ current: e.target.value });
  };

  render() {
    const select = (
      <select onChange={this.onSelectChange}>
        {sizes.map((elm, idx) => (
          <option key={idx} value={idx}>
            {elm} cm
          </option>
        ))}
      </select>
    );

    return (
      <div className={styles.Sizer}>
        <h3 className={styles.Title}>Sprawdź cenę</h3>
        <div className={styles.Wrapper}>
          <p className={styles.Subtitle}>Wzrost/Rozmiar:</p>
          {select}
        </div>
        <div className={styles.Wrapper}>
          <p className={styles.Subtitle}>Cena:</p>
          <p className={styles.Price}>
            {parseFloat(this.props.prices[this.state.current]).toFixed(2)} zł
          </p>
        </div>
      </div>
    );
  }
}

export default Sizer;
