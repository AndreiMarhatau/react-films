import React from 'react';
import styles from './FilterSortContainer.module.scss';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';

const FilterSortContainer = () => {
    return <div className={styles.wrapper}>
    <div className={styles.container}>
      <Filter/>
      <Sort/>
    </div>
    <hr className={styles.hr}/>
    </div>;
}

export default FilterSortContainer;