import React from 'react';
import styles from './MainContainer.module.scss';
import FilterSortContainer from '../FilterSortContainer/FilterSortContainer';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

const MainContainer = () => {
    return <div className={styles.container}>
        <div className={styles.innerContainer}>
            <FilterSortContainer/>
            <MoviesContainer/>
        </div>
    </div>;
}

export default MainContainer;