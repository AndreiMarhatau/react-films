import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../actions/search-data.action';
import SearchContainer from "../../modules/header/containers/SearchContainer/SearchContainer";
import MainContainer from "../../modules/movie-list/containers/MainContainer/MainContainer";
import SearchBy from '../../utils/enums/SearchBy';

const MainRoute = () => {
  return <>
    <SearchContainer />
  </>
};

export default MainRoute;