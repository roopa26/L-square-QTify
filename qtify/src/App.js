import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from './api/api';
import {Outlet} from "react-router-dom";

function App() {

  // const [searchData, setSearchData] = useState("");
  const [apiData,setApiData] = useState({topAlbum :[], newAlbum :[], songs : []});

  const generateData = (key, source) => {
    source().then((data) => {
      setApiData((prevData) => {
        return {...prevData, [key]:data}
      })
    })
  }


  useEffect(() => {
    generateData("newAlbum",fetchNewAlbums);
    generateData("topAlbum", fetchTopAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const {topAlbum = [], newAlbum = [], songs = []} = apiData;
  return (
    <>
      <div>
        <Navbar/>
        <Outlet context={{data : {topAlbum, newAlbum, songs}}}/>
      </div>
    </>
  );
}

export default App;
