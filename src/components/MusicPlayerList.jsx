import { React, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Song from "./Song";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MusicPlayerList() {
  const url = "https://api.lyrics.ovh/suggest";
  const [songsList, setSongsList] = useState([]);
  const history = useNavigate();
  let [pageIndex, setPageIndex] = useState(0);
  let [singerOrSongName, setSingerOrSongName] = useState("karan%20aujla");

  useEffect(() => {
    const songsList = JSON.parse(localStorage.getItem("songsList") || "[]");
    setSongsList({data: songsList})
  }, []);
  

  const getSongsList = (songOrSingerName = "karan%20aujla", pageIndex) => {
    return axios
      .get(`${url}/${songOrSingerName}&index=${pageIndex ? pageIndex : 0}`)
      .then((res) => {
        setSongsList([]);
        setSongsList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSearchButtonClick = (event) => {
    setSongsList([]);
    setSingerOrSongName(event);
    getSongsList(event);
    localStorage.setItem("songsList", JSON.stringify(songsList.data));
  };

  const handleSongClick = (songId) => {
    localStorage.setItem("songsList", JSON.stringify(songsList.data));
    localStorage.setItem('songId',songId);
    history(`/view-song/${songId}`);
  };

  const handleNextButtonClick = () => {
    setPageIndex(++pageIndex);
    setSongsList([]);
    getSongsList(singerOrSongName, pageIndex);
  };

  const handlePreviousButtonClick = () => {
    setPageIndex(--pageIndex);
    setSongsList([]);
    getSongsList(singerOrSongName, pageIndex);
  };

  return (
    <>
      <div className="mt-5 pt-5 d-flex justify-content-center">
        <SearchBar
          onSearchButtonClick={handleSearchButtonClick}
          placeholder="Enter song or singer name"
        />
      </div>
      {songsList.data ? (
        <div className="main mt-5">
          <div className="row justify-content-center w-100">
            {songsList.data.map((elem) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4 mx-3 px-4">
                  <Song
                    key={elem.id}
                    songUrl={elem.preview}
                    onSongClick={() => handleSongClick(elem.id)}
                    songImageUrl={elem.album.cover_xl}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-around my-3">
              <button
                disabled={pageIndex === 0}
                onClick={handlePreviousButtonClick}
                className="btn-dark btn"
              >
                Previous
              </button>
              <button
                disabled={pageIndex === 15}
                onClick={handleNextButtonClick}
                className="btn-dark btn">Next</button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
