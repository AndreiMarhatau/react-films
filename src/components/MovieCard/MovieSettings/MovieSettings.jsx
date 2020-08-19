import React, { useState } from 'react';
import styles from './MovieSettings.scss';
import PropTypes from 'prop-types';
import { ModalContext } from '../../../App';
import ModalType from '../../../utils/enums/ModalType';
import SettingImg from './components/SettingImg/SettingImg';
import SettingsCard from './components/SettingsCard/SettingsCard';

const MovieSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(false);
    e.preventDefault();
  }

  return (
    <ModalContext.Consumer>{({modalType, setModalType}) => <div className={styles.container}>
      {!isOpen ? <SettingImg clickHandler={() => setIsOpen(true)}/>
      : <SettingsCard 
          crossClose={() => setIsOpen(false)} 
          editClick={(e) => {
            setModalType(ModalType.edit);
            handleClick(e);
          }}
          deleteClick={(e) => {
            setModalType(ModalType.remove);
            handleClick(e);
          }}/>}
    </div>}
    </ModalContext.Consumer>);
}

export default MovieSettings;