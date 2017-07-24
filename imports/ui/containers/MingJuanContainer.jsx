import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

let styles = {};
@Radium
export default class MingJuanContainer extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        我的第一个页面啦啦啦啦啦
        <Style
          scopeSelector=""
          rules={{
          }}
        />
      </div>
    );
  }
}
styles = {

};
MingJuanContainer.propTypes = {
  // img: PropTypes.string.isRequired,
};
