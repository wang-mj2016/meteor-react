import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

import TeamIntroduction from '../components/TeamIntroduction.jsx';

let styles = {};
@Radium
export default class MyTestContainer extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <TeamIntroduction />
        <Style
          scopeSelector="#"
          rules={{
          }}
        />
      </div>
    );
  }
}
styles = {

};
MyTestContainer.propTypes = {
  // img: PropTypes.string.isRequired,
};
