import { clearStatusAction } from './status.action';

const { createAction } = require('redux-actions');

export const setModalTypeAction = createAction('SET_MODAL_TYPE');

export const setModalType = (modalType, movieId = null) => (dispatch) => {
  dispatch(clearStatusAction());
  dispatch(setModalTypeAction({ type: modalType, id: movieId }));
};
