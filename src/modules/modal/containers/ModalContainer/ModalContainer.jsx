import React, { useContext, useCallback } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../../App';
import ModalType from '../../../../utils/enums/ModalType';
import Add from '../Add/Add';
import Edit from '../Edit/Edit';
import Remove from '../Remove/Remove';
import { useSelector, useDispatch } from 'react-redux';
import { modalTypeSelector, modalIdSelector } from '../../../../selectors/modal-type.selector';
import { setModalType } from '../../../../actions/modal-type.action';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(modalTypeSelector);
  const movieId = useSelector(modalIdSelector);

  const close = useCallback(() => dispatch(setModalType(ModalType.none)), []);
  const getModalCallback = useCallback((modalType, setModalType) => getModal(modalType, setModalType, movieId), [modalType, movieId]);
  
  return getModalCallback(modalType, close);
}

export default ModalContainer;

const getModal = (modalType, close, movieId) => {
  switch(modalType){
    case ModalType.add: return <Add close={close}/>;
    case ModalType.edit: return <Edit id={movieId} close={close}/>;
    case ModalType.remove: return <Remove id={movieId} close={close}/>;
    default: return null;
  }
}