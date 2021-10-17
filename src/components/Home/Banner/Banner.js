import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';
import { ReactComponent as Down } from '../../../assets/icons/down.svg';

const size = '60';

const Banner = () => {
  const scrollHandler = (e) => {
    e.preventDefault();
    const pres = document.querySelector('#presentation');
    const dist = pres.getBoundingClientRect().top;

    const hedr = document.querySelector('header');
    const dist2 = hedr.getBoundingClientRect().height;

    window.scrollBy({
      top: dist - dist2,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.Banner}>
      <Link to='/zamowienia' className={styles.Bargain}>
        Promocja, przy zamówieniu <i>3</i> lub więcej produktów, przysługuje{' '}
        <i>8%</i> zniżki.
      </Link>
      <h1 className={styles.Title}>Witamy na Anne Dance Studio :)</h1>
      <h2 className={styles.Subtitle}>
        Jesteśmy firmą krawiecką zajmującą się szyciem strojów do tańców
        towarzyskich.
      </h2>
      <p className={styles.Description}>
        Szyjemy stroje zarówno dla dzieci oraz młodzieży jak i osób dorosłych. W
        naszej specjalizacji posiadamy długoletnie doświadczenie, z kolei w
        produkcji korzystamy ze sprawdzonych, wysokiej klasy tkanin,
        gwarantujących estetykę, funkcjonalność i komfort użytkowania.
      </p>
      <h3 className={styles.Greeting}>
        Serdecznie zapraszamy Państwa do przejrzenia naszego asortymentu oraz
        życzymy miłego dnia.
      </h3>
      <a className={styles.ScrollHandler} onClick={scrollHandler}>
        <Down viewBox='0 0 24 24' width={size} height={size} />
      </a>
    </section>
  );
};

export default Banner;
