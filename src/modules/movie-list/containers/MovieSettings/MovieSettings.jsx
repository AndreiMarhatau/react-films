import React, { useState, useCallback } from 'react';
import styles from './MovieSettings.scss';
import PropTypes from 'prop-types';
import ModalType from '../../../../utils/enums/ModalType';
import SettingImg from '../../components/SettingImg/SettingImg';
import SettingsCard from '../../components/SettingsCard/SettingsCard';
import usePreventHandler from '../../../../utils/hooks/usePreventHandler';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../../../actions/modal-type.action';

const MovieSettings = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const setOpen = useCallback(() => setIsOpen(true), []);

  const editClick = usePreventHandler(() => {
    dispatch(setModalType(ModalType.edit, props.id));
    setIsOpen(false);
  }, []);

  const deleteClick = usePreventHandler(() => {
    dispatch(setModalType(ModalType.remove, props.id));
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

MovieSettings.propTypes = {
  id: PropTypes.number,
}

export default MovieSettings;