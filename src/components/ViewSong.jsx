import React, { useState, useEffect } from "react";
import Song from "./Song";
export default function ViewSong() {
  const songsList = JSON.parse(localStorage.getItem("songsList") || "[]");
  const [songInfo, setSongInfo] = useState([]);

  useEffect(() => {
    const songId = localStorage.getItem("songId");
    setSongInfo(songsList.filter((elem) => elem.id === Number(songId)));
    console.log(songInfo)
    console.log(songsList)
  }, []);
  
  return (
    <>
    {songInfo.length &&
      <div className="view-song-wrapper pt-5">
        <div className="image-wrapper pt-5 d-flex justify-content-center">
          <img src={songInfo[0].album.cover_xl} alt="" />
        </div>
        <div className="mt-4 text-center">
          <h3>
            Title: <span>{songInfo[0].title}</span>
          </h3>
        </div>
        <div className="song-details">
            <div className="d-flex mt-4 flex-column align-items-center">
          <h4 className="mb-4">
            Song Type: <span>{songInfo[0].album.type}</span>
          </h4>

          <Song songUrl={songInfo[0].preview} />
          </div>
          <div className="singer-details">
            <h1 className="text-center mt-5">Singer Details</h1>
            <div className="singer-image d-flex justify-content-center mt-3">
              <img src={songInfo[0].artist.picture_xl} alt="" />
            </div>
            <h4 className="text-center">
              Name: <span>{songInfo[0].artist.name}</span>
            </h4>
          </div>
        </div>
      </div>
}
    </>
  );
}
