const { createAction } = require("redux-actions");

export const setModalTypeAction = createAction('SET_MODAL_TYPE');

export const setModalType = (modalType) => {
  return setModalTypeAction(modalType);
};