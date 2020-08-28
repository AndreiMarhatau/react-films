import React, { useState, useCallback, useMemo } from 'react';
import styles from './Dropdown.scss';
import PropTypes from 'prop-types';
import Arrow from '../Arrow/Arrow';
import usePreventHandler from '../../utils/hooks/usePreventHandler';

const Dropdown = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [isOpen, setIsOpen] = useState(false);

  const selectOne = usePreventHandler((e) => {
    setSelected(selected.concat(e.target.text));
    props.onChange && props.onChange(selected);
  }, [selected, props.onChange]);

  const deleteOne = useCallback((item) => {
    setSelected(selected.filter(selectedItem => selectedItem !== item));
    props.onChange && props.onChange(selected);
  }, [selected, props.onChange]);

  const setOpen = useCallback((e) => {
    if(e.target.className === styles.input){
      setIsOpen(!isOpen);
    }
  }, [isOpen, styles]);

  const selectedMap = useMemo(() => selected.map(item => (
    <div className={styles.itemWrapper} key={item}>
      <div className={styles.crossWrapper}>
        <img className={styles.cross} src='http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png' 
        onClick={() => deleteOne(item)}/>
      </div>
    {item}
    </div>)),
    [selected, deleteOne]);

  const openedMap = useMemo(() => 
    !isOpen ? false : props.items.filter(item => !selected.includes(item)).map(item => 
    <a key={item} href='' className={styles.item} onClick={selectOne}>{item}</a>), [isOpen, selected, selectOne, props.items]);

  return (
    <div className={styles.container}>
      <div className={styles.input} onClick={setOpen}>
        {selectedMap}
        <div className={styles.arrow}><Arrow descending={!isOpen} /></div>
      </div>
      {openedMap}
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;