import React, { useState, useCallback } from 'react';
import styles from './Add.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import Consts from '../../../../constants/consts'
import Dropdown from '../../../../components/Dropdown/Dropdown';
import useModalFormikData from '../../../../utils/hooks/useModalFormikData';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../../../../actions/add-movie.action';
import { ErrorMessage, Formik } from 'formik';
import { updateMoviesStatusSelector } from '../../../../selectors/update-movies-trigger.selector';

const Add = (props) => {
  const dispatch = useDispatch();

  const status = useSelector(updateMoviesStatusSelector);

  const formikData = useModalFormikData();

  const onSubmit = useCallback((values) => {
    dispatch(addMovie({
      title: values.title,
      release_date: values.release_date,
      poster_path: values.poster_path,
      genres: values.genres,
      overview: values.overview,
      runtime: +values.runtime,
    }));
  }, []);


  return (
    <div className={sharedStyles.wrapper}>
      <Formik initialValues={formikData.initialValues} validate={formikData.validate} onSubmit={onSubmit}>
        {({
          values, handleChange, handleSubmit, isSubmitting
        }) => (
            <form className={sharedStyles.modalWrapper} onSubmit={handleSubmit}>
              <ModalWindow title='ADD MOVIE' isSubmitting={isSubmitting} cancelHandler={props.close}>
                <span className={sharedStyles.label}>TITLE</span>
                <input name='title' value={values.title} className={sharedStyles.input} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='title' /></div>

                <span className={sharedStyles.label}>RELEASE DATE</span>
                <input name='release_date' type='date' value={values.release_date} className={sharedStyles.input} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='release_date' /></div>

                <span className={sharedStyles.label}>MOVIE URL</span>
                <input name='poster_path' value={values.poster_path} className={sharedStyles.input} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='poster_path' /></div>

                <span className={sharedStyles.label}>GENRE</span>
                <Dropdown name='genres' items={Consts.genres} selected={values.genres} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='genres' /></div>

                <span className={sharedStyles.label}>OVERVIEW</span>
                <input name='overview' value={values.overview} className={sharedStyles.input} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='overview' /></div>

                <span className={sharedStyles.label}>RUNTIME</span>
                <input name='runtime' value={values.runtime} className={sharedStyles.input} onChange={handleChange} />
                <div className={sharedStyles.error}><ErrorMessage name='runtime' /></div>

                {status !== 200 && status !== null && <div className={sharedStyles.error}>Something went wrong.</div>}
              </ModalWindow>
            </form>)
        }
      </Formik>
    </div>);
}

Add.propTypes = {
  close: PropTypes.func,
}

export default Add;