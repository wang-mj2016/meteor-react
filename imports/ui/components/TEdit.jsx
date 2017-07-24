import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

let styles = {};
@Radium
export default class TEdit extends Component {
  render() {
    const onSave = this.props.onSave;
    const onCancel = this.props.onCancel;
    const item = this.props.item || {
      title: '',
      cont: '',
    };
    const saveText = item.id ? '保存' : '创建';
    const save = () => {
      onSave({
        ...item,
        title: this.refs.title.value,
        cont: this.refs.cont.value,
      });
    };
    // console.log('this.props.item', this.props.item);
    // console.log('item.title', item.title);
    return (
      <div>
        <div style={styles.editBox}>
          <div style={styles.operate}>
            <div style={styles.creatBtn} onClick={save}>{saveText}</div>
            <div style={styles.cancleBtn} onClick={onCancel}>取消</div>
          </div>
          <input
            style={styles.input}
            ref="title"
            type="text"
            placeholder="请填写标题"
            defaultValue={item.title}
          />
          <textarea
            style={styles.input}
            ref="cont"
            name="text"
            placeholder="请填写内容"
            defaultValue={item.cont}
            cols="30"
            rows="10"
          ></textarea>
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
  editBox: {
    position: 'relative',
  },
  operate: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
  creatBtn: {
    display: 'inline-block',
    padding: '8px 12px',
    borderRadius: '4px',
    color: '#fff',
    background: '#5cb85c',
    marginRight: '15px',
    cursor: 'pointer',
  },
  cancleBtn: {
    display: 'inline-block',
    padding: '8px 12px',
    borderRadius: '4px',
    background: '#ccc',
    cursor: 'pointer',
  },
  input: {
    display: 'block',
    marginBottom: '15px',
    width: '80%',
  },
};
TEdit.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  item: PropTypes.object,
};
