import { Fragment } from 'react';
import MainHeader from './MainHeader';
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
