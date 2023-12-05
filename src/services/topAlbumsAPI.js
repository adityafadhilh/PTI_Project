const topAlbumsAPI = async () => {

  // const getAlbumsAPI = `https://api.music.apple.com/v1/catalog/us/charts?types=albums`;

  // const APIResponse = await fetch(getAlbumsAPI);
  
  // const { results } = await APIResponse.json();

  const results = [
    {
      artistId: 1,
      artistName: "Kendrick Lamar",
      collectionName: "To Pimp a Butterfly ",
      artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/97/1a/a3/971aa332-2c7d-947c-33ed-4635d41115a4/23UM1IM56239.rgb.jpg/316x316bf.webp" 
    },
    {
      artistId: 2,
      artistName: "Radiohead",
      collectionName: "OK Computer",
      artworkUrl100: "https://e.snmc.io/i/300/w/cb41b0acd3d7c304e1d1052b615ea300/8862252/Radiohead%20-%20OK%20Computer%2C%20Cover%20art.webp" 
    },
    {
      artistId: 3,
      artistName: "Wish You Were Here",
      collectionName: "Pink Floyd",
      artworkUrl100: "https://e.snmc.io/i/300/w/4a254e6f1a9d64edae48659b98939b2e/4184635/Pink%20Floyd%20-%20Wish%20You%20Were%20Here%2C%20Cover%20art.webp" 
    },
    {
      artistId: 4,
      artistName: "Radiohead",
      collectionName: "In Rainbows",
      artworkUrl100: "https://e.snmc.io/i/300/w/484b57ab2605dad8b546b441a71e3043/5914164/Radiohead%20-%20In%20Rainbows%2C%20Cover%20art.webp" 
    },
    {
      artistId: 5,
      artistName: "Madvillainy",
      collectionName: "Madvillain",
      artworkUrl100: "https://e.snmc.io/i/300/w/56d7cbc8e10866f5deaf8183045beffc/10532981/Madvillain%20-%20Madvillainy%2C%20Cover%20art.webp" 
    },
  ]

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