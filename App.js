import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails'
import Header from 'components/Header';
import MovieList from 'components/MovieList';

import { POPULARMOVIE_URL } from 'short/Urls.js'

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(POPULARMOVIE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movies={movieList} />} />
        <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
