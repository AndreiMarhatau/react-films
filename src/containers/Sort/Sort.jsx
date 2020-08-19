import React, { useState, useEffect } from 'react';
import styles from './Sort.scss';
import SortButton from '../../components/SortButton/SortButton';

const Sort = () => {
  const [active, setActive] = useState('RELEASE DATE');
  const [descending, setDescending] = useState(true);

  const getActive = (text) => {
    return text === active;
  }

  const clickHandler = (e) => {
    if(e.target.text === active){
      setDescending(!descending);
    }
    else{
      setDescending(true);
      setActive(e.target.text);
    }
    e.preventDefault();
  }

  useEffect(() => {
    //Here will be action execution when active or descending states changes
  }, [active, descending]);

    return <div className={styles.container}>
      <span className={styles.label}>SORT BY</span>
      <SortButton isActive={getActive('RELEASE DATE')} text='RELEASE DATE' descending={descending} clickHandler={clickHandler}/>
    </div>;
}

export default Sort;