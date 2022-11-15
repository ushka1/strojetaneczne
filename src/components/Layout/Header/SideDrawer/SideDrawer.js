import React from 'react';
import styles from './SideDrawer.module.scss';

import Hamburger from '../../../UI/Hamburger/Hamburger';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Links from '../Links/Links';

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.burgerRef = React.createRef();
  }

  state = {
    sideOpen: false,
  };

  toggleMenuHandler = () => {
    this.setState((prevState) => ({ sideOpen: !prevState.sideOpen }));
  };

  closeMenuHandler = () => {
    this.burgerRef.current.checked = !this.burgerRef.current.checked;
    this.setState({ sideOpen: false });
  };

  render() {
    const style = {};

    if (this.state.sideOpen) {
      style.transform = 'translateX(0)';
    }

    return (
      <div className={styles.SideDrawer}>
        <Backdrop open={this.state.sideOpen}></Backdrop>
        <div>
          <aside style={style} className={styles.Side}>
            <Links close={this.closeMenuHandler}></Links>
          </aside>
          <Hamburger
            reference={this.burgerRef}
            click={this.toggleMenuHandler}
          ></Hamburger>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
