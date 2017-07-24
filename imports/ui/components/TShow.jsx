import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

let styles = {};
@Radium
export default class TShow extends Component {
  render() {
    const item = this.props.item;
    // const onDelete = this.props.onDelete;
    // const onEdit = this.props.onEdit;
    if (!item || !item.id) {
      return (
        <div style={styles.default}>
          请创建文章或者选择文章
        </div>
      );
    }
    // console.log(this.props);
    return (
      <div>
        <div style={styles.showBox}>
          <div style={styles.operate}>
            <div style={styles.editBtn}>编辑</div>
            <div style={styles.deletBtn}>删除</div>
          </div>
          <div style={styles.tit}>{item.title}</div>
          <div style={styles.cont}>{item.cont}</div>
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
  default: {
    fontSize: '33px',
    lineHeight: '33px',
    color: '#ccc',
  },
  showBox: {
    position: 'relative',
  },
  operate: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
  editBtn: {
    display: 'inline-block',
    marginRight: '15px',
    padding: '8px 12px',
    borderRadius: '4px',
    color: '#fff',
    background: '#0275d8',
    cursor: 'pointer',
  },
  deletBtn: {
    display: 'inline-block',
    padding: '8px 12px',
    borderRadius: '4px',
    color: '#fff',
    background: '#d9534f',
    cursor: 'pointer',
  },
  tit: {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#353535',
  },
  cont: {
    fontSize: '14px',
    color: '#666',
  },
};
TShow.propTypes = {
  item: PropTypes.object,
  // onDelete: PropTypes.func,
  // onEdit: PropTypes.func,
};
