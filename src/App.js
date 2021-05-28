import React, { Suspense } from 'react';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

import { connect } from 'react-redux';
import * as actions from './Store/Actions/Index';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from './components/UI/Spinner/Spinner';

const Pricing = React.lazy(() => import('./containers/Pricing/Pricing'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Offer = React.lazy(() => import('./containers/Offer/Offer'));
const Order = React.lazy(() => import('./containers/Order/Order'));
const Contact = React.lazy(() => import('./containers/Contact/Contact'));

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPrices();
    this.props.checkAuth();
  }

  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route path='/oferta'>
              <Suspense fallback={<Spinner></Spinner>}>
                <Offer></Offer>
              </Suspense>
            </Route>
            <Route path='/cennik'>
              <Suspense fallback={<Spinner></Spinner>}>
                <Pricing></Pricing>
              </Suspense>
            </Route>
            <Route path='/zamowienia'>
              <Suspense fallback={<Spinner></Spinner>}>
                <Order></Order>
              </Suspense>
            </Route>
            <Route path='/kontakt'>
              <Suspense fallback={<Spinner></Spinner>}>
                <Contact></Contact>
              </Suspense>
            </Route>
            <Route path='/admin'>
              <Suspense fallback={<Spinner></Spinner>}>
                <Auth></Auth>
              </Suspense>
            </Route>
            <Route path='/start' exact>
              <Home></Home>
            </Route>
            <Redirect from='/' to='/start'></Redirect>
          </Switch>
        </Layout>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPrices: () => dispatch(actions.fetchPrices()),
    checkAuth: () => dispatch(actions.checkAuth()),
  };
};

export default connect(null, mapDispatchToProps)(App);
