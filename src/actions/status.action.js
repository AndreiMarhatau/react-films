import { createAction } from 'redux-actions';

export const clearStatusAction = createAction('CLEAR_STATUS');

export const clearStatus = () => clearStatusAction();
