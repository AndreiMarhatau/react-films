const { createSelector } = require("reselect");

const modalTypeSelector = createSelector(state => state.modalType, modalType => modalType);

export default modalTypeSelector;