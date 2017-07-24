import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import Radium, { Style } from 'radium';
// import _ from 'lodash';

import * as CounterActions from '/imports/redux/actions/counter.js';

let styles = {};
@Radium
class CounterContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //   };
  //   this.addOne = this.addOne.bind(this);
  //   this.reduceOne = this.reduceOne.bind(this);
  // }
  // addOne() {
  //   const newNumber = this.state.number + 1;
  //   this.setState({
  //     number: newNumber,
  //   });
  // }
  // reduceOne() {
  //   if (this.state.number < 1) {
  //     return;
  //   }
  //   const newNumber = this.state.number - 1;
  //   this.setState({
  //     number: newNumber,
  //   });
  // }
  render() {
    console.log('this.props', this.props);
    return (
      <div style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              clicked:&nbsp;&nbsp;{this.props.counter}&nbsp;&nbsp;times
            </div>
            <div className="col-xs-1">
              <div style={styles.btn} onClick={this.props.addOne}>+</div>
            </div>
            <div className="col-xs-1">
              <div style={styles.btn} onClick={this.props.reduceOne}>-</div>
            </div>
            <div className="col-xs-2">
              <div style={styles.btn} onClick={this.props.incrementIfOdd}>奇数+1</div>
            </div>
            <div className="col-xs-2">
              <div style={styles.btn}>延迟1s+1</div>
            </div>
          </div>
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
  btn: {
    textAlign: 'center',
    padding: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
CounterContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  reduceOne: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return {
    counter: state.counter.number,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
