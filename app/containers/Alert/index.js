/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectAlert from './selectors';
import reducer from './reducer';
import { removeMessage } from './actions';

export class Alert extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const messages = Object.keys(this.props.alert.messages);
    if (messages.length === 0) {
      return null;
    }

    const alerts = messages.map(() => {
      const message = this.props.alert.messages[0];
      if (!message.autoHide) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.props.dispatch(removeMessage());
        }, message.timeout || 5000);
      }
      return (
        <div className={`alertbox ${message.messageType || 'error'}`} key={message.id}>
          <span>{message.content}</span>
        </div>
      );
    });
    return (
      <div className="alert-container">
        {alerts}
      </div>
    );
  }
}

Alert.propTypes = {
  dispatch: PropTypes.func,
  alert: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  alert: makeSelectAlert(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'alert', reducer });

export default compose(
  withReducer,
  withConnect,
)(Alert);
