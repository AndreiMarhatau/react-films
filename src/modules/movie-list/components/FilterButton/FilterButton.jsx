import React from 'react';
import styles from './FilterButton.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FilterButton = (props) => {
    return <div className={styles.container}>
        <a href='' className={classNames(styles.button, props.isActive ? styles.active : null)} onClick={props.clickHandler}>
          {props.text}
        </a>
        {props.isActive && <hr className={styles.hr}/>}
      </div>;
}

FilterButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
  clickHandler: PropTypes.func
};

export default FilterButton;