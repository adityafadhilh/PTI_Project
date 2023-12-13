import React from "react";
import { Link } from "react-router-dom";
import { DivAlbums, MainAlbums } from "../styles/components/ListAlbums";

function ListAlbums(props) {
  const { responseData, artistInput } = props;
  return (
    <MainAlbums>
      <p className="result">{artistInput} </p>
      <DivAlbums className="listAlbums">
        {responseData.map((album, index) => (
          <div key={index} className="album">
            <img src={album.artworkUrl100} alt="Album" className="img" />
            <h2>{album.collectionName}</h2>
            <h3>{album.artistName}</h3>
            <Link
              to={`/album/${album.collectionId}`}
              data-testid={`link-to-album-${album.collectionId}`}
            >
              Details
            </Link>
          </div>
        ))}
      </DivAlbums>
    </MainAlbums>
  )
}

export default ListAlbums;
