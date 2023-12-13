import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { InfoDetails, MainDetails, MusicList } from '../styles/pages/Album';
import { Spinner } from 'react-bootstrap';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {},
      songs: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMusics();
  }

  fetchMusics = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true })
    const songs = await getMusics(id);
    const info = songs[0];
    this.setState({ info, songs, loading: false });
  }

  render() {
    const { info, songs, loading } = this.state;
    const { artistName, collectionName, artworkUrl100 } = info;
    return (
      <div>
        <Header />
        {loading ? (
          <div className="d-flex mt-5"><Spinner animation="border mx-auto" /></div>
        ) : (
          <MainDetails>
            <h1 data-testid="artist-name">{artistName}</h1>
            <InfoDetails>
              <div>
                <h2 data-testid="album-name">{collectionName}</h2>
                <img src={artworkUrl100} alt={collectionName} />
              </div>
              <MusicList>
                {songs.filter((song) => song !== info)
                  .map((s) => (<MusicCard
                    song={s}
                    key={s.trackId}
                  />))}
              </MusicList>
            </InfoDetails>
          </MainDetails>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Album;
