import React from 'react';
import styles from './Auth.module.scss';

import Admin from './Admin/Admin';
import Button from '../../components/UI/Button/Button';

import { withRouter, Route, Redirect } from 'react-router-dom';
import * as actions from '../../Store/Actions/Index';

import { connect } from 'react-redux';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  login = (e) => {
    e.preventDefault();

    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
      returnSecureToken: true,
    };

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCodzG_kJKCJCdfyP7IWUiMMKosav8Dl20',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData),
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Podano nieprawidłowe dane logowania.');
        }
        return res.json();
      })
      .then((data) => {
        this.props.logIn(data.idToken);
        this.props.history.push('/admin/config');

        const date = new Date().getTime() + data.expiresIn * 1000;
        localStorage.setItem('expires', date);
        localStorage.setItem('token', data.idToken);
      })
      .catch((err) => {
        alert(err);
      });
  };

  forwardHandler = () => {
    this.props.history.push('/admin/config');
  };

  render() {
    let form = (
      <form ref={this.formRef} className={styles.Form} onSubmit={this.login}>
        <label htmlFor='email'>Email</label>
        <input
          ref={this.emailRef}
          name='email'
          id='email'
          type='email'
          placeholder='email'
        />
        <label htmlFor='password'>Hasło</label>
        <input
          ref={this.passwordRef}
          name='password'
          id='password'
          type='password'
          placeholder='hasło'
        />
        <Button type='accept'>Zaloguj</Button>
      </form>
    );

    if (this.props.token) {
      form = (
        <div className={styles.Logged}>
          <h1>Jesteś zalogowany.</h1>
          <Button click={this.props.logOut} type='cancel'>
            Wyloguj
          </Button>
          <Button click={this.forwardHandler} type='accept'>
            Konfiguracja
          </Button>
        </div>
      );
    }

    return (
      <section>
        <Route path='/admin/config'>
          {this.props.token ? (
            <Admin></Admin>
          ) : (
            <Redirect to='/admin'></Redirect>
          )}
        </Route>
        <Route path='/admin' exact>
          {form}
        </Route>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(actions.logOut()),
    logIn: (token) => dispatch(actions.logIn(token)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
