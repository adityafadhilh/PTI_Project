import { topAlbumsData } from "../assets/data/topAlbums";

const topAlbumsAPI = async () => {

  const response = topAlbumsData.map(
    ({
      artistId,
      artistName,
      collectionName,
      artworkUrl100,
    }) => ({
      artistId,
      artistName,
      collectionName,
      artworkUrl100,
    }),
  );
  return response;
};

export default topAlbumsAPI;