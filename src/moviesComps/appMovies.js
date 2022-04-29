import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { sortBy } from "lodash"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MoviesInput } from './moviesInput'
import { MoviesList } from './moviesList'
import { MovieInfo } from './movieInfo';


export const AppMovies = () => {
  let [search, setSearch] = useState("white")
  let [ar, setAr] = useState([])
  let [sortSelect, setSortSelect] = useState("Title")
   const [loading,setLoading] = useState(false)

  useEffect(() => {
    doSearchApi()
  }, [search])

  const sortMovies = (_sort) => {
    let temp_ar = sortBy(ar, _sort);
    setAr(temp_ar);
    setSortSelect(_sort);
  }

  const doSearchApi = async () => {
     setLoading(true);
    let url = `http://www.omdbapi.com/?s=${search}&tt3896198&apikey=fc9b3d5c`
    let resp = await axios.get(url);
    console.log("axios", resp);
    let temp_ar = sortBy(resp.data.Search, sortSelect);
    setAr(temp_ar.reverse());
     setLoading(false);
  }

  if(!loading) return (
    <Router>
       {/* {loading ? <img src="/images/loading.gif" width="200" /> : ""} */}
      <MoviesInput sortMovies={sortMovies} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<MoviesList loading={loading} movies_ar={ar} />} />
        <Route path="/year/:year" element={<MoviesList loading={loading} movies_ar={ar} />} />
        <Route path="*" element={<MoviesList loading={loading} movies_ar={ar} />} />
        <Route path="/search/:searchQ" element={<MoviesList loading={loading} movies_ar={ar} />} />
        <Route path="/info/:id" element={<MovieInfo/>} />
      </Routes>
    </Router>
  )
  else return null
}
