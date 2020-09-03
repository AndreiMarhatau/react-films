import React, { useState, useEffect, useCallback } from 'react';
import styles from './Sort.scss';
import SortButton from '../../components/SortButton/SortButton';
import usePreventHandler from '../../utils/hooks/usePreventHandler';
import { useDispatch } from 'react-redux';
import { setSort } from '../../actions/search-data.action';

const Sort = () => {
  const [active, setActive] = useState('RELEASE DATE');
  const [descending, setDescending] = useState(true);
  const dispatch = useDispatch();

  const getActive = useCallback((text) => {
    return text === active;
  }, [active]);

  const clickHandler = usePreventHandler((e) => {
    if(e.target.text === active){
      setDescending(!descending);
    }
    else{
      setDescending(true);
      setActive(e.target.text);
    }
  }, [descending, active]);

  useEffect(() => {
    let sortBy = active === 'RELEASE DATE' ? 'release_date' : active === 'GENRE' ? 'genres' : active === 'RATING' ? 'vote_average' : '';
    dispatch(setSort(sortBy, descending ? 'desc' : 'asc'));
  }, [active, descending]);

    return <div className={styles.container}>
      <span className={styles.label}>SORT BY</span>
      <SortButton isActive={getActive('RELEASE DATE')} text='RELEASE DATE' descending={descending} clickHandler={clickHandler}/>
      <SortButton isActive={getActive('GENRE')} text='GENRE' descending={descending} clickHandler={clickHandler}/>
      <SortButton isActive={getActive('RATING')} text='RATING' descending={descending} clickHandler={clickHandler}/>
    </div>;
}

export default Sort;