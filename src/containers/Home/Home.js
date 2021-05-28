import React from 'react';

import Banner from '../../components/Home/Banner/Banner';
import Presentation from '../../components/Home/Presentation/Presentation';
import Testimonials from '../../components/Home/Testimonials/Testimonials';

class Home extends React.Component {
  render() {
    return (
      <section>
        <Banner></Banner>
        <Presentation></Presentation>
        <Testimonials></Testimonials>
      </section>
    );
  }
}

export default Home;
