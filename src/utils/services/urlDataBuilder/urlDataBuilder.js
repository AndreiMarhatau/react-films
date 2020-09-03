const buildUrlData = (values, ...names) => {
  if(values.length !== names.length){
    console.log('urlDataBuilder. Values length doesnt equal to names length');
    return '';
  }
  return names.reduce((str, curr, index) => index === 0 ? `${str}${curr}=${values[index]}` : `${str}&${curr}=${values[index]}`, '?');
}

export default buildUrlData;