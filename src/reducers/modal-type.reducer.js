const { handleActions } = require('redux-actions');
const { default: ModalType } = require('../utils/enums/ModalType');
const { setModalTypeAction } = require('../actions/modal-type.action');

const modalTypeReducer = handleActions({
  [`${setModalTypeAction}`]: (state, { payload }) => {
    for (const key in ModalType) {
      if (ModalType[key] === payload.type) {
        return payload;
      }
    }
    return state;
  },
}, { type: ModalType.none, id: null });

export default modalTypeReducer;
