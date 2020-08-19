import React, { useState } from 'react';
import styles from './Dropdown.scss';
import PropTypes from 'prop-types';
import Arrow from '../Arrow/Arrow';

const Dropdown = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [isOpen, setIsOpen] = useState(false);

  const selectOne = (e) => {
    setSelected(selected.concat(e.target.text));
    props.onChange && props.onChange(selected);
    e.preventDefault();
  }

  const deleteOne = (item) => {
    setSelected(selected.filter(selectedItem => selectedItem !== item));
    props.onChange && props.onChange(selected);
  }

  const setOpen = (e) => {
    if(e.target.className === styles.input){
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.input} onClick={(e) => setOpen(e)}>
        {selected.map(item => (<div className={styles.itemWrapper} key={item}>
        <div className={styles.crossWrapper}>
            <img className={styles.cross} src='http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png' 
            onClick={() => deleteOne(item)}/>
        </div>
        {item}
        </div>
        ))}
        <div className={styles.arrow}><Arrow descending={!isOpen} /></div>
      </div>
      {
        !isOpen ? false : props.items.filter(item => !selected.includes(item)).map(item => 
          <a key={item} href='' className={styles.item} onClick={(e) => selectOne(e)}>{item}</a>)
      }
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;