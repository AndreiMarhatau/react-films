import React, { useContext } from 'react';
import styles from './ModalWindow.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ModalType from '../../utils/enums/ModalType';
import { ModalContext } from '../../App';

const ModalWindow = (props) => {
  var {modalType, setModalType} = useContext(ModalContext);

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
            onClick={() => {setModalType(ModalType.none); props.cancelHandler();}}/>
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