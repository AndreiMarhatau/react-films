import React, { useState, useCallback } from 'react';
import styles from './Remove.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../../actions/delete-movie.action';
import usePreventHandler from '../../../../utils/hooks/usePreventHandler';

const Remove = (props) => {
  const dispatch = useDispatch();

  const submitHandler = usePreventHandler(() => {
    dispatch(deleteMovie(props.id));
  }, [props.id]);

  return <div className={sharedStyles.wrapper}>
    <form className={sharedStyles.modalWrapper} onSubmit={submitHandler}>
      <ModalWindow title='DELETE MOVIE' cancelHandler={props.close}>
          <span className={sharedStyles.label}>Are you sure you want to delete this movie?</span>
      </ModalWindow>
    </form>
  </div> 
}

Remove.propTypes = {
  close: PropTypes.func,
  id: PropTypes.number,
}

export default Remove;