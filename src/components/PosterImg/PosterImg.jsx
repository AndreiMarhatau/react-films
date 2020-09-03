import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const PosterImg = (props) => {
  const [src, setSrc] = useState(props.src);

  const onError = useCallback(() => {
    setSrc('https://hdfilm.pw/image700x1050/uploads/poster_none.png');
  }, []);
  useEffect(() => {
    setSrc(props.src);
  }, [props.src]);

  return <img className={props.className} src={src} alt={props.alt} onError={onError}/>
}

PosterImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default PosterImg;