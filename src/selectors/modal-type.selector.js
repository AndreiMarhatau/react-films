const { createSelector } = require('reselect');

export const modalTypeSelector = createSelector((state) => state.modalType, (modalType) => modalType.type);

export const modalIdSelector = createSelector((state) => state.modalType, (modalType) => modalType.id);
