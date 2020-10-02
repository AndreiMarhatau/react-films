import React from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setSearch } from "../../actions/search-data.action";
import SearchContainer from "../../modules/header/containers/SearchContainer/SearchContainer";
import MainContainer from "../../modules/movie-list/containers/MainContainer/MainContainer";
import SearchBy from '../../utils/enums/SearchBy';

const SearchRoute = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(query, query ? SearchBy.title : SearchBy.none));
  }, [query]);

  return <>
    <SearchContainer />
    <MainContainer />
  </>
};

export default SearchRoute;