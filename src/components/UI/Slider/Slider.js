import React from 'react';
import styles from './Slider.module.scss';
import icons from '../../../assets/icons/icons';
import BigImage from './BigImage/BigImage';

const Left = icons.left;
const Right = icons.right;

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.sliderRef = React.createRef();
    this.listRef = React.createRef();
    this.firstSlide = React.createRef();
    this.secondSlide = React.createRef();
    this.thirdSlide = React.createRef();
    this.leftRef = React.createRef();
    this.rightRef = React.createRef();
  }

  state = {
    images: this.props.images,
    small: this.props.small,
    maxImage: this.props.images.length - 1,
    timer: null,
    currentImage: 0,
  };

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  preloadImages = () => {
    this.imagesTags = this.state.images.map((elm, idx) => {
      const tag = document.createElement('img');
      tag.alt = this.props.alt ? this.props.alt : 'Slider';
      tag.src = elm;

      if (this.props.controlled) {
        tag.addEventListener(
          'click',
          this.bigImageHandler.bind(this, elm, idx),
        );
      }

      return tag;
    });
  };

  componentDidMount() {
    const slides = [
      this.firstSlide.current,
      this.secondSlide.current,
      this.thirdSlide.current,
    ];

    this.preloadImages();

    slides[0].style.left = '-100%';
    slides[1].style.left = '0%';
    slides[2].style.left = '100%';

    this.slides = slides;

    if (this.props.controlled) {
      const sliderWidth = this.sliderRef.current.clientWidth;

      this.sliderRef.current.addEventListener(
        'touchstart',
        (e) => (this.startPosition = e.targetTouches[0].clientX),
      );

      this.sliderRef.current.addEventListener('touchend', (e) => {
        const position = e.changedTouches[0].clientX;
        if (position - this.startPosition < (sliderWidth / 5) * -1) {
          let current = this.state.currentImage + 1;
          if (current > this.state.maxImage) {
            current = 0;
          }
          this.stepForward.call(this, this.slides, current, true);
        } else if (position - this.startPosition > sliderWidth / 5) {
          let current = this.state.currentImage - 1;
          if (current < 0) {
            current = this.state.maxImage;
          }
          this.stepBackward.call(this, this.slides, current, true);
        }

        this.startPosition = 0;
      });

      this.secondSlide.current.insertAdjacentElement(
        'afterbegin',
        this.imagesTags[0],
      );

      return;
    }

    this.stepForward(slides, this.state.currentImage);

    this.timer = setInterval(() => {
      this.stepForward(slides, this.state.currentImage);
    }, 2000);
  }

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  blockade = () => {
    if (this.listRef.current) {
      this.sliderRef.current.style.pointerEvents = 'none';
      this.leftRef.current.style.pointerEvents = 'none';
      this.rightRef.current.style.pointerEvents = 'none';
      this.listRef.current.querySelectorAll('li').forEach((elm) => {
        elm.style.pointerEvents = 'none';
      });

      setTimeout(() => {
        this.sliderRef.current.style.pointerEvents = 'all';
        this.leftRef.current.style.pointerEvents = 'all';
        this.rightRef.current.style.pointerEvents = 'all';
        this.listRef.current.querySelectorAll('li').forEach((elm) => {
          elm.style.pointerEvents = 'all';
        });
      }, 300);
    }
  };

  stepForward(slides, currentImage, manual) {
    this.blockade();

    let next = currentImage >= this.state.maxImage ? 0 : currentImage + 1;

    if (manual) {
      currentImage = currentImage > this.state.maxImage ? 0 : currentImage;
      next = currentImage;
    }

    this.setState({ currentImage: next });

    slides.forEach((slide) => {
      switch (slide.style.left) {
        case '100%':
          slide.innerHTML = '';
          slide.insertAdjacentElement(
            'afterbegin',
            this.imagesTags[currentImage],
          );
          slide.style.left = '0%';
          slide.style.zIndex = '10';
          break;
        case '0%':
          slide.style.left = '-100%';
          slide.style.zIndex = '5';
          break;
        case '-100%':
          slide.style.left = '100%';
          slide.style.zIndex = '0';
          break;
        default:
          throw new Error('Slider error - forward');
      }
    });
  }

  stepBackward(slides, currentImage, manual) {
    this.blockade();

    let previous = currentImage <= 0 ? this.state.maxImage : currentImage - 1;

    if (manual) {
      currentImage = currentImage < 0 ? this.state.maxImage : currentImage;

      previous = currentImage;
    }

    // if (manual) {
    //   currentImage = currentImage > this.state.maxImage ? 0 : currentImage;
    //   next = currentImage;
    // }

    this.setState({ currentImage: previous });

    slides.forEach((slide) => {
      switch (slide.style.left) {
        case '100%':
          slide.style.left = '-100%';
          slide.style.zIndex = '0';
          break;
        case '0%':
          slide.style.left = '100%';
          slide.style.zIndex = '5';
          break;
        case '-100%':
          slide.innerHTML = '';
          slide.insertAdjacentElement(
            'afterbegin',
            this.imagesTags[currentImage],
          );
          slide.style.left = '0%';
          slide.style.zIndex = '10';
          break;
        default:
          throw new Error('Slider error - backward');
      }
    });
  }

  goToImageHandler = (idx) => {
    window.clearInterval(this.timer);

    if (idx === this.state.currentImage) {
      return;
    } else if (idx > this.state.currentImage) {
      this.stepForward.call(this, this.slides, idx, true);
    } else {
      this.stepBackward.call(this, this.slides, idx, true);
    }
  };

  bigImageHandler = (image) => {
    const bigImage = (
      <BigImage click={this.removeBigHandler} image={image}></BigImage>
    );
    this.setState({ big: bigImage });
  };

  removeBigHandler = () => {
    this.setState({ big: null });
  };

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  render() {
    const Magnifier = icons.magnifier;
    let magnifierClass = null;
    let controls = null;
    let controlLeft = null;
    let controlRight = null;

    if (this.props.controlled) {
      magnifierClass = styles.Magnifier;
      controlRight = (
        <span
          ref={this.rightRef}
          onClick={() => {
            this.stepForward.call(
              this,
              this.slides,
              this.state.currentImage + 1,
              true,
            );
          }}
          className={[styles.SideControl, styles.Right].join(' ')}
        >
          <Right></Right>
        </span>
      );
      controlLeft = (
        <span
          ref={this.leftRef}
          onClick={() => {
            this.stepBackward.call(
              this,
              this.slides,
              this.state.currentImage - 1,
              true,
            );
          }}
          className={[styles.SideControl, styles.Left].join(' ')}
        >
          <Left></Left>
        </span>
      );

      controls = (
        <ul ref={this.listRef} className={styles.Controls}>
          {this.state.images.map((elm, idx) => (
            <li key={idx} onClick={this.goToImageHandler.bind(this, idx)}>
              <img src={this.state.small[idx]} alt='Zmiana slajdu'></img>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className={this.props.class}>
        {controls}

        <div
          className={[styles.Slider, magnifierClass].join(' ')}
          style={{ ...this.props.style }}
          ref={this.sliderRef}
        >
          {controlLeft}
          {controlRight}

          <span className={styles.Zoom}>
            <Magnifier></Magnifier>
          </span>

          {this.props.controlled ? (
            <p className={styles.Number}>
              Zdjęcie nr {this.state.currentImage + 1}
            </p>
          ) : null}

          <div
            style={{ ...this.props.slideStyle }}
            ref={this.firstSlide}
            className={styles.Slide}
          ></div>
          <div
            style={{ ...this.props.slideStyle }}
            ref={this.secondSlide}
            className={styles.Slide}
          ></div>
          <div
            style={{ ...this.props.slideStyle }}
            ref={this.thirdSlide}
            className={styles.Slide}
          ></div>
        </div>

        {this.state.big ? this.state.big : null}
      </div>
    );
  }
}

export default Slider;
