import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

let styles = {};
@Radium
export default class TCreateBar extends Component {
  render() {
    const onClick = this.props.onClick;
    // console.log(this.props);
    return (
      <div>
        <div
          style={styles.creatBar}
          onClick={onClick}
        >+&nbsp;创建新的文章</div>
        <Style
          scopeSelector="#row"
          rules={{
          }}
        />
      </div>
    );
  }
}
styles = {
  creatBar: {
    padding: '12px 20px',
    border: '1px solid #eee',
    color: '#014c8c',
    cursor: 'pointer',
  },
};
TCreateBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
