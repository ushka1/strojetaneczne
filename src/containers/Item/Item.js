import React from 'react';
import styles from './Item.module.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Heading from '../../components/UI/Heading/Heading';
import Spinner from '../../components/UI/Spinner/Spinner';
import Sizer from '../../components/Item/Sizer/Sizer';
import Description from '../../components/Item/Description/Description';
import Slider from '../../components/UI/Slider/Slider';
import { nameToId, getImagesById } from '../../utility/imagePath';

class Item extends React.Component {
  state = {
    data: null,
    price: null,
  };

  nonStandard1 = (data) => {
    const pricesFrak = [
      250, 250, 250, 250, 280, 280, 280, 300, 300, 300, 320, 320, 320, 320,
    ];

    this.setState({
      data: data,
      price: pricesFrak,
    });
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const name = this.props.match.params.id;
    const id = nameToId(name);

    if (id == null) {
      this.props.history.push('/oferta');
      return;
    }

    if (this.state.data && this.state.price) {
      return;
    }

    const priceId = nextProps.items[id].price;

    if (priceId === 'ns1') {
      this.nonStandard1(nextProps.items[id]);
      return;
    }

    this.setState({
      data: nextProps.items[id],
      price: nextProps.prices[priceId].prices,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.items && this.props.prices) {
      const name = this.props.match.params.id;
      const id = nameToId(name);

      const priceId = this.props.items[id].price;

      if (priceId === 'ns1') {
        this.nonStandard1(this.props.items[id]);
        return;
      }

      this.setState({
        data: this.props.items[id],
        price: this.props.prices[priceId].prices,
      });
    }
  }

  render() {
    let content = <Spinner></Spinner>;

    if (this.state.price && this.state.data) {
      let description = null;

      const name = this.props.match.params.id;
      const id = nameToId(name);
      const images = getImagesById(id);

      if (this.state.data.description) {
        description = (
          <Description data={this.state.data.description}>
            <Sizer prices={this.state.price}></Sizer>
          </Description>
        );
      }

      content = (
        <>
          <Heading>{this.state.data.description.title}</Heading>
          <div className={styles.Wrapper}>
            <Slider
              class={styles.Slider}
              controlled={true}
              alt={name.replaceAll('_', ' ')}
              images={images}
              small={images}
            ></Slider>
            {description}
          </div>
        </>
      );
    }

    return (
      <>
        <Helmet>
          <title>{this.state?.data?.description?.title}</title>
        </Helmet>
        <section className={styles.Item}>
          <p
            onClick={() => this.props.history.goBack()}
            className={styles.Back}
          >
            &laquo; Powrót
          </p>
          {content}
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.fetch.items,
    prices: state.fetch.prices,
  };
};

export default withRouter(connect(mapStateToProps, null)(Item));
