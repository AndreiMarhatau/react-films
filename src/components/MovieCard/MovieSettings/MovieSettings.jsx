import React, { useState, useContext, useCallback } from 'react';
import styles from './MovieSettings.scss';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../App';
import ModalType from '../../../utils/enums/ModalType';
import SettingImg from './components/SettingImg/SettingImg';
import SettingsCard from './components/SettingsCard/SettingsCard';
import usePreventHandler from '../../../utils/hooks/usePreventHandler';

const MovieSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {modalType, setModalType} = useContext(ModalContext);

  const setOpen = useCallback(() => setIsOpen(true), []);

  const editClick = usePreventHandler(() => {
    setModalType(ModalType.edit);
    setIsOpen(false);
  }, []);

  const deleteClick = usePreventHandler(() => {
    setModalType(ModalType.remove);
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.container}>
      {!isOpen ? <SettingImg clickHandler={setOpen}/>
      : <SettingsCard 
          crossClose={() => setIsOpen(false)} 
          editClick={editClick}
          deleteClick={deleteClick}/>}
    </div>)
}

export default MovieSettings;