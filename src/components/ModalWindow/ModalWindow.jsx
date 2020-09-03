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
            <a className={styles.cancel}>RESET</a>
            <a className={styles.submit}>SUBMIT</a>
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
  submitHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
};

export default ModalWindow;