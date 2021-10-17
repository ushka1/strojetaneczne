import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Order.module.scss';

import Heading from '../../components/UI/Heading/Heading';

import image from '../../assets/images/order/pomiary.jpg';
import icons from '../../assets/icons/icons';

const Mail = icons.mail;
const Phone = icons.phone;

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.legendRef = React.createRef();
  }

  componentDidMount() {
    this.legendRef.current.addEventListener('mousemove', (e) => {
      this.listRef.current.className = styles[e.target.className];
    });

    this.legendRef.current.addEventListener('mouseleave', () => {
      this.listRef.current.className = null;
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Stroje Taneczne - zamówienia</title>
        </Helmet>
        <section className={styles.Order}>
          <Heading>Zamówienia</Heading>
          <h2>Zamówienia przyjmujemy telefonicznie lub mailowo.</h2>
          <p className={styles.Description}>
            Każdy z oferowanych przez nas produktów wykonywany jest na miarę. W
            celu złożenia zamówienia, prosimy o postępowanie zgodnie z
            poniższymi krokami.
          </p>
          <h5 className={styles.Bargain}>
            W przypadku zamówienia <i>3</i> lub więcej przedmiotów, przewidziana
            jest zniżka w wysokości <i>8%</i> obejmująca całe zamówienie.
          </h5>
          <article className={styles.Legend}>
            <h3>1. Do zamówienia prosimy o podanie następujących wymiarów:</h3>
            <p>(Najedź myszką żeby podświetlić)</p>
            <ol start='1' ref={this.legendRef}>
              <li className='shirt'>koszula – 0, 1, 3, 4, 5, 6</li>
              <li className='trousers'>
                spodnie – 0, 2, 5, 6, 9, dodatkowo długośc od pępka do ziemi
              </li>
              <li className='vest'>kamizelka – 0, 4, 5, 6</li>
              <li className='dress'>
                sukienka – 0, 1, 4, 5, 6, długosc spódniczki mierzona od pasa do
                kolana
              </li>
            </ol>
          </article>
          <article className={styles.Measures}>
            <img src={image} alt='pomiary szablon' />
            <div>
              <h3>Opis do sylwetki:</h3>
              <ol start='0' ref={this.listRef}>
                <li>Wzrost</li>
                <li>Długość rękawa (mierzyć do nadgarstka)</li>
                <li>Długość zewnętrzna nogawki (od talii do ziemi)</li>
                <li>Obwód szyi</li>
                <li>Obwód klatki piersiowej</li>
                <li>Obwód talii (pasa)</li>
                <li>Obwód bioder</li>
                <li>Obwód uda</li>
                <li>Obwód kostki</li>
                <li>Długość wewnętrzna nogawki (od kroku do ziemi)</li>
              </ol>
            </div>
          </article>

          <article className={styles.Contact}>
            <h3>2. Po wykonaniu wymiarów zapraszamy do złożenia zamówienia:</h3>
            <ul>
              <li>
                <Mail></Mail>
                <p>Mailowo:&nbsp;&nbsp;&nbsp;</p>
                <a href='mailto:angelinaprajzner@gmail.com'>
                  angelinaprajzner@gmail.com
                </a>
              </li>
              <li>
                <Phone></Phone>
                <p>Telefonicznie:&nbsp;&nbsp;&nbsp;</p>
                <a href='tel:+48519113426'>+48 519-113-426</a>
              </li>
            </ul>
          </article>

          <article className={styles.Delivery}>
            <h3>
              3. Termin realizacji zamówienia wynosi od 7 do 10 dni roboczych.
            </h3>
            <p>Zamówienia doręczamy pocztą lub przez firmę kurierską.</p>
          </article>
        </section>
      </>
    );
  }
}

export default Order;
