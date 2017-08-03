import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium, { Style } from 'radium';
import _ from 'lodash';
import TCreateBar from '../components/TCreateBar.jsx';
import TList from '../components/TList.jsx';
import TEdit from '../components/TEdit.jsx';
import TShow from '../components/TShow.jsx';
import * as actionCreators from '../../redux/actions/article.js';

let styles = {};
@Radium
class MyTestContainer extends Component {
  constructor(props) {
    super(props);
    this.saveItem = this.saveItem.bind(this);
    this.clickSaveItem = this.clickSaveItem.bind(this);
  }
  saveItem(item) {
    let items = this.props.state.article.items;
    return (
      items = [...items, {
        ...item,
        id: _.uniqueId('article_'),
        time: new Date().getTime(),
      }]
    );
  }
  clickSaveItem() {
  }
  render() {
    const { state, actions } = this.props;
    const { items, selectedId, isEditing } = state.article;
    const item = items.find(
      ({ id }) => id === selectedId
    );
    // console.log('items', items);
    // console.log('selectedId', selectedId);
    // console.log('isEditing', isEditing);
    // console.log('actions', actions);
    return (
      <div id="my-test-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TCreateBar onClick={actions.createNewEntry} />
              <TList
                items={items}
              />
            </div>
            <div className="col-md-8">
              {
                isEditing
                ? <TEdit
                  item={item}
                  onCancel={actions.cancelEdit}
                  onSave={this.clickSaveItem}
                />
                : <TShow
                  item={item}
                />
              }
            </div>
          </div>
        </div>
        <Style
          scopeSelector="#my-test-container"
          rules={{
            paddingTop: '50px',
            paddingBottom: '50px',
          }}
        />
      </div>
    );
  }
}
styles = {

};
MyTestContainer.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(MyTestContainer);
