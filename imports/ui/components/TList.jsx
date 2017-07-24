import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';
import TListItem from './TListItem.jsx';

let styles = {};
@Radium
export default class TList extends Component {
  renderItem() {
    const items = this.props.items;
    // const onSelect = this.props.onSelect;
    return items.map((item, index) =>
      <TListItem
        key={index}
        item={item}
      />
    );
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.renderItem()}
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

};
TList.propTypes = {
  items: PropTypes.array.isRequired,
  // onSelect: PropTypes.func.isRequired,
};
