import React from 'react';
import styles from './ModalContainer.scss';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import PropTypes from 'prop-types';
import { ModalContext } from '../../App';
import ModalType from '../../utils/enums/ModalType';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Remove from './components/Remove/Remove';

const ModalContainer = () => {
  return <ModalContext.Consumer>
    {({modalType, setModalType}) => {
      return getModal(modalType, setModalType);
    }}
   </ModalContext.Consumer>;
}

export default ModalContainer;

const getModal = (modalType, setModalType) => {
  const close = () => setModalType(ModalType.none);
  switch(modalType){
    case ModalType.add: return <Add close={close}/>;
    case ModalType.edit: return <Edit close={close}/>;
    case ModalType.remove: return <Remove close={close}/>;
    default: return null;
  }
}