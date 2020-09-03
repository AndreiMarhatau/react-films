const { handleActions } = require("redux-actions");
const { default: ModalType } = require("../utils/enums/ModalType");
const { setModalTypeAction } = require("../actions/modal-type.action");

const modalTypeReducer = handleActions({
  [`${setModalTypeAction}`]: (state, {payload}) => {
    for(var key in ModalType){
      if(ModalType[key] === payload){
        return payload;
      }
    }
    return state;
  }
}, ModalType.none);

export default modalTypeReducer;