import React, { useState } from 'react';
import styles from './Remove.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../../../components/ModalWindow/ModalWindow';

const Remove = (props) => {

  return <div className={sharedStyles.wrapper}>
    <div className={sharedStyles.modalWrapper}>
      <ModalWindow title='DELETE MOVIE' submitHandler={() => {}} cancelHandler={props.close}>
          <span className={sharedStyles.label}>Are you sure you want to delete this movie?</span>
      </ModalWindow>
    </div>
  </div> 
}

Remove.propTypes = {
  close: PropTypes.func,
}

export default Remove;