import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

let styles = {};
@Radium
export default class TListItem extends Component {
  render() {
    const item = this.props.item;
    // const onClick = this.props.onClick;
    let formatTime = '未知时间';
    if (item.time) {
      formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }
    // console.log(this.props);
    return (
      <div>
        <div style={styles.li}>
          {formatTime}&nbsp;&nbsp;
          {item.title}
        </div>
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
  li: {
    padding: '12px 20px',
    color: '#5091e6',
    border: '1px solid #eee',
    cursor: 'pointer',
  },
};
TListItem.propTypes = {
  item: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
};
