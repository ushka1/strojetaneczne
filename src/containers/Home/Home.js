import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../../components/Home/Banner/Banner';
import Presentation from '../../components/Home/Presentation/Presentation';
import Testimonials from '../../components/Home/Testimonials/Testimonials';

class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Stroje Taneczne - szyte na miarę koszule, spodnie, sukienki
          </title>
        </Helmet>
        <section>
          <Banner></Banner>
          <Presentation></Presentation>
          <Testimonials></Testimonials>
        </section>
      </>
    );
  }
}

export default Home;
