import { addMessage } from './containers/Alert/actions';

export const showAlert = (message, type, autoHide) => addMessage(message, type, autoHide);
