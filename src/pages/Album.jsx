import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { InfoDetails, MainDetails, MusicList } from '../styles/pages/Album';
import axios from 'axios';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {},
      songs: [],
    };
  }

  componentDidMount() {
    this.fetchMusics();
  }

  fetchMusics = async () => {
    const { match: { params: { id } } } = this.props;
    // const songs = await getMusics(id);
    // const info = songs[0];
    // this.setState({ info, songs });

    const params = {
      id: id,
      entity: "song",
    }

    try {
      let url = ""
      console.log(process.env.NODE_ENV);
      if (process.env.NODE_ENV === "production") {
        url = "https://itunes.apple.com"
      } else if (process.env.NODE_ENV === "development") {
        url = ""
      }
      const songs = (await axios.get(`${url}/lookup`, { params })).data.results
      const info = songs[0] 
      this.setState({ loading: false, songs, info})
      console.log(songs);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { info, songs } = this.state;
    const { artistName, collectionName, artworkUrl100 } = info;
    return (
      <div>
        <Header />
        <MainDetails>
          <h1 data-testid="artist-name">{artistName}</h1>
          <InfoDetails>
            <div>
              <h2 data-testid="album-name">{collectionName}</h2>
              <img src={ artworkUrl100 } alt={ collectionName } />
            </div>
            <MusicList>
                {songs.filter((song) => song !== info)
                  .map((s) => (<MusicCard
                    song={ s }
                    key={ s.trackId }
                  />))}
            </MusicList>
          </InfoDetails>
        </MainDetails>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Album;
