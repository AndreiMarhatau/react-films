import React from 'react'
import PropTypes from 'prop-types'
import styles from './Arrow.module.scss';
import classNames from 'classnames';

const Arrow = props => {
    return (
            props.descending ? 
                <span className={classNames(styles.arrow, styles.descending)}></span> : 
                <span className={classNames(styles.arrow, styles.ascending)}></span>
    )
}

Arrow.propTypes = {
    descending: PropTypes.bool,
}

export default Arrow
