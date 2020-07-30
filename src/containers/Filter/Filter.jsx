import React, { useState } from 'react';
import styles from './Filter.scss';
import FilterButton from '../../components/FilterButton/FilterButton';

const Filter = () => {

  const [active, setActive] = useState('ALL');

  const handleClick = (e) => {
    setActive(e.target.text);
    e.preventDefault();
  }

  const getActive = (text) => {
    return text === active;
  }


    return <div className={styles.container}>
      <FilterButton text='ALL' isActive={getActive('ALL')} clickHandler={handleClick}/>
      <FilterButton text='DOCUMENTARY' isActive={getActive('DOCUMENTARY')} clickHandler={handleClick}/>
      <FilterButton text='COMEDY' isActive={getActive('COMEDY')} clickHandler={handleClick}/>
      <FilterButton text='HORROR' isActive={getActive('HORROR')} clickHandler={handleClick}/>
      <FilterButton text='CRIME' isActive={getActive('CRIME')} clickHandler={handleClick}/>
    </div>;
}

export default Filter;