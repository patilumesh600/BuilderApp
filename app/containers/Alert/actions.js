/*
 *
 * Alert actions
 *
 */

import * as Constants from './constants';

export function defaultAction() {
  return {
    type: Constants.DEFAULT_ACTION,
  };
}

export function addMessage(content, messageType = 'error', autoHide) {
  return {
    type: Constants.ADD_MESSAGE,
    message: {
      id: (new Date()).getTime(),
      messageType,
      content,
      autoHide,
    },
  };
}

export function removeMessage(id) {
  return {
    type: Constants.REMOVE_MESSAGE,
    id,
  };
}
