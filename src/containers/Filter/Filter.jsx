import React, { useState, useCallback, useEffect } from 'react';
import styles from './Filter.scss';
import FilterButton from '../../components/FilterButton/FilterButton';
import usePreventHandler from '../../utils/hooks/usePreventHandler';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../actions/search-data.action';

const Filter = () => {

  const [active, setActive] = useState(['ALL']);
  const dispatch = useDispatch();

  const handleClick = usePreventHandler((e) => {
    if(e.target.text === 'ALL'){
      setActive([e.target.text]);
      return;
    }
    let list = active;
    if(list.includes('ALL')){
      list = list.filter(item => item !== 'ALL')
    }
    if(list.includes(e.target.text)){
      if(list.length === 1){
        setActive(['ALL']);
      }
      else{
        setActive(list.filter(item => item !== e.target.text));
      }
    }
    else{
      setActive(list.concat(e.target.text));
    }
  }, [active]);

  const getActive = useCallback((text) => {
    return active.includes(text);
  }, [active]);

  useEffect(() => {
    dispatch(setFilter(active.includes('ALL') ? '' : active.join(', ')));
  }, [active]);


    return <div className={styles.container}>
      <FilterButton text='ALL' isActive={getActive('ALL')} clickHandler={handleClick}/>
      <FilterButton text='DOCUMENTARY' isActive={getActive('DOCUMENTARY')} clickHandler={handleClick}/>
      <FilterButton text='COMEDY' isActive={getActive('COMEDY')} clickHandler={handleClick}/>
      <FilterButton text='HORROR' isActive={getActive('HORROR')} clickHandler={handleClick}/>
      <FilterButton text='CRIME' isActive={getActive('CRIME')} clickHandler={handleClick}/>
    </div>;
}

export default Filter;