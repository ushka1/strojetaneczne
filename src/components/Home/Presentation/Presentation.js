import React from 'react';
import styles from './Presentation.module.scss';

import sliderImages from '../../../assets/images/slider/images';
import Slider from '../../UI/Slider/Slider';
import Heading from '../../UI/Heading/Heading';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.articleRef = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(max-width: 40em)');

    if (!mediaQuery.matches) {
      document.addEventListener('scroll', this.appearText);
    } else {
      this.textRef.current.classList.add(styles.Small);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.appearText);
  }

  appearText = () => {
    const distance = this.articleRef.current.offsetTop - window.scrollY;
    if (distance < 500) {
      document.removeEventListener('scroll', this.appearText);
      this.textRef.current.style.animationName = 'slideLeft';
    }
  };

  render() {
    return (
      <section
        id='presentation'
        className={styles.Presentation}
        ref={this.articleRef}
      >
        <Slider class={styles.Slider} images={sliderImages}></Slider>
        <article className={styles.Article} ref={this.textRef}>
          <Heading>W naszej ofercie znajdują się:</Heading>
          <ul>
            <li>
              <span>&#9674;</span> koszule body do standardu, turniejowe,
              treningowe i frakowe,
            </li>
            <li>
              <span>&#9674;</span> koszule body do latin,
            </li>
            <li>
              <span>&#9674;</span> spodnie do tańców towarzyskich, standard,
              latin,
            </li>
            <li>
              <span>&#9674;</span> kamizelki do standardu,
            </li>
            <li>
              <span>&#9674;</span> sukienki dla początkujących tancerek,
            </li>
            <li>
              <span>&#9674;</span> sukienki do standardu i latin.
            </li>
          </ul>
          <p className={styles.Breakpoint}>
            <span className={styles.ImportantInfo}>
              *Każdy z naszych produktów pozostaje zgodny z obowiązującym
              regulaminem w zakresie wszystkich grup wiekowych.
            </span>
          </p>
          <Heading>Co nas cechuje?</Heading>
          <ul>
            <li>
              <span>&#9674;</span> Wszystkie stroje są szyte na miarę, każdy z
              dochowaniem niezwykłej staranności.
            </li>
            <li>
              <span>&#9674;</span> Korzystamy tylko ze sprawdzonych, wysokiej
              klasy tkanin.
            </li>
            <li>
              <span>&#9674;</span> Realizujemy zamówienia zarówno indywidualne
              jak i grupowe.
            </li>
            <li>
              <span>&#9674;</span> Naszym klientom gwarantujemy konkurencyjne
              ceny, krótkie terminy realizacji i dogodne formy płatności.
            </li>
            <li>
              <span>&#9674;</span> Zawsze z chęcią odpowiemy na państwa pytania,
              telefonicznie bądź też mailowo.
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Presentation;
