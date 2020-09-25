import React, { useCallback } from 'react';
import styles from './Edit.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Consts from '../../../../constants/consts'
import Dropdown from '../../../shared/Dropdown/Dropdown';
import useModalFormikData from '../../../../utils/hooks/useModalFormikData';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../../../../actions/update-movie.action';
import { ErrorMessage, Formik, useFormik } from 'formik';
import movieSelector from '../../../../selectors/movie.selector';
import { updateMoviesStatusSelector } from '../../../../selectors/update-movies-trigger.selector';

const Edit = (props) => {
  const dispatch = useDispatch();

  const status = useSelector(updateMoviesStatusSelector);

  const movie = useSelector(movieSelector(props.id));

  const formikData = useModalFormikData(movie);

  const onSubmit = useCallback((values) => {
    dispatch(updateMovie({
      id: props.id,
      title: values.title,
      release_date: values.release_date,
      poster_path: values.poster_path,
      genres: values.genres,
      overview: values.overview,
      runtime: +values.runtime,
    }));
  }, [props.id]);

  const formik = useFormik({
    validate: formikData.validate,
    initialValues: formikData.initialValues,
    onSubmit: onSubmit,
  });

  return (
    <div className={sharedStyles.wrapper}>
      <form className={sharedStyles.modalWrapper} onSubmit={formik.handleSubmit}>
        <ModalWindow title='ADD MOVIE' isSubmitting={formik.isSubmitting} cancelHandler={props.close}>
          <span className={sharedStyles.label}>MOVIE ID</span>
          <span className={styles.label}>{props.id}</span>

          <span className={sharedStyles.label}>TITLE</span>
          <input name='title' value={formik.values.title} className={sharedStyles.input} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.title}</div>

          <span className={sharedStyles.label}>RELEASE DATE</span>
          <input name='release_date' type='date' value={formik.values.release_date} className={sharedStyles.input} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.release_date}</div>

          <span className={sharedStyles.label}>MOVIE URL</span>
          <input name='poster_path' value={formik.values.poster_path} className={sharedStyles.input} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.poster_path}</div>

          <span className={sharedStyles.label}>GENRE</span>
          <Dropdown name='genres' items={Consts.genres} selected={formik.values.genres} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.genres}</div>

          <span className={sharedStyles.label}>OVERVIEW</span>
          <input name='overview' value={formik.values.overview} className={sharedStyles.input} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.overview}</div>

          <span className={sharedStyles.label}>RUNTIME</span>
          <input name='runtime' value={formik.values.runtime} className={sharedStyles.input} onChange={formik.handleChange} />
          <div className={sharedStyles.error}>{formik.errors.runtime}</div>

          {status !== 200 && status !== null && <div className={sharedStyles.error}>Something went wrong.</div>}
        </ModalWindow>
      </form>
    </div>);
}

Edit.propTypes = {
  close: PropTypes.func,
  id: PropTypes.number,
}

export default Edit;