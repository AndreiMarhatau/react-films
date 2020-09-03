import React, { useContext, useCallback } from 'react';
import styles from './ModalContainer.scss';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import PropTypes from 'prop-types';
import { ModalContext } from '../../App';
import ModalType from '../../utils/enums/ModalType';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Remove from './components/Remove/Remove';
import { useSelector, useDispatch } from 'react-redux';
import modalTypeSelector from '../../selectors/modal-type.selector';
import { setModalType } from '../../actions/modal-type.action';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(modalTypeSelector);

  const close = useCallback(() => dispatch(setModalType(ModalType.none)), []);
  const getModalCallback = useCallback((modalType, setModalType) => getModal(modalType, setModalType), [modalType]);
  
  return getModalCallback(modalType, close);
}

export default ModalContainer;

const getModal = (modalType, close) => {
  switch(modalType){
    case ModalType.add: return <Add close={close}/>;
    case ModalType.edit: return <Edit close={close}/>;
    case ModalType.remove: return <Remove close={close}/>;
    default: return null;
  }
}