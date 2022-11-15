import React from 'react';
import styles from './Testimonials.module.scss';

import Testimonial from './Testimonial/Testimonial';
import Heading from '../../UI/Heading/Heading';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.testimonialsRef = React.createRef();
    this.listRef = React.createRef();
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(max-width: 40em)');

    if (!mediaQuery.matches) {
      document.addEventListener('scroll', this.appearText);
    } else {
      this.listRef.current.classList.add(styles.Small);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.appearText);
  }

  appearText = () => {
    const distance = this.testimonialsRef.current.offsetTop - window.scrollY;
    if (distance < 600) {
      document.removeEventListener('scroll', this.appearText);
      this.listRef.current.style.animationName = 'slideUp';
    }
  };

  render() {
    return (
      <section className={styles.Testimonials} ref={this.testimonialsRef}>
        <Heading>Co sądzą o nas klienci?</Heading>

        <ul ref={this.listRef}>
          <Testimonial gender='male' author='Client:35393954'>
            {`"Bardzo dobry produkt, bardzo dobry kontakt ze sprzedawcą. Oby
            wiecej takich sprzedawców."`}
          </Testimonial>
          <Testimonial gender='female' author='ekstera'>
            {`"To już nasz 3 zakup na aukcjach ze strojami tanecznymi. Jesteśmy
            bardzo zadowoleni z jakości i dokładności w wykonaniu. Pełen
            profesjonalizm. Z czystym sumieniem polecam."`}
          </Testimonial>
          <Testimonial gender='female' author='Kasia4221'>
            {`"Spodnie do tańca super. Szybka realizacja zamówienia. Zdecydowanie
            polecam wszystkim."`}
          </Testimonial>
        </ul>
      </section>
    );
  }
}

export default Testimonials;
