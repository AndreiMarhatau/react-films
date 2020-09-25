import React, { useCallback } from 'react';
import styles from './ModalWindow.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ModalType from '../../utils/enums/ModalType';
import { setModalType } from '../../actions/modal-type.action';
import { useDispatch } from 'react-redux';

const ModalWindow = (props) => {
  const dispatch = useDispatch();

  const closeHandler = useCallback(() => {dispatch(setModalType(ModalType.none)); props.cancelHandler();}, [props.cancelHandler]);

    return (
        <>
          <span className={styles.title}>{props.title}</span>
          {props.children}
          <div className={styles.buttons}>
            <a onClick={props.cancelHandler} className={styles.cancel}>RESET</a>
            <button type='submit' className={styles.submit} disabled={props.isSubmitting}>SUBMIT</button>
          </div>
          <div className={styles.crossWrapper}>
            <img className={styles.cross} src='http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png' 
            onClick={closeHandler}/>
          </div>
        </>
    );
}

ModalWindow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  cancelHandler: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default ModalWindow;