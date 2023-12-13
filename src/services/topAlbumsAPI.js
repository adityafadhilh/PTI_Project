const topAlbumsAPI = async () => {

  const getAlbumsAPI = 'https://pti-backend-0f1a0610119f.herokuapp.com/top';

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  console.log(results);

  const response = results.map(
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