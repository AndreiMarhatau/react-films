const { useFormik } = require("formik");

const useModalFormikData = (initialValues = null) => {
  return ({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: [],
      overview: '',
      runtime: null,
      ...initialValues,
    },
    validate: (values) => {
      const errors = {};
      if(values.title.trim() === ''){
        errors.title = 'Must be not empty';
      }
      if(values.release_date !== '' & new Date(values.release_date) == 'Invalid Date'){
        errors.release_date = 'Date is invalid';
      }
      if(values.poster_path.trim() === ''){
        errors.poster_path = 'Must be not empty';
      }
      if(values.genres.length === 0){
        errors.genres = 'Genre is not chosen';
      }
      if(values.overview.trim() === ''){
        errors.overview = 'Must be not empty';
      }
      if(isNaN(values.runtime) | values.runtime < 0){
        errors.runtime = 'Must be a number that represents amount of minutes and not less than 0 minute';
      }
      return errors;
    },
  });
}

export default useModalFormikData;