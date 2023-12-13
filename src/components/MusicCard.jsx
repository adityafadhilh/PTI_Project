import React from "react";
import Loading from "./Loading";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from "../services/favoriteSongsAPI";
import { CardMusic } from "../styles/pages/Album";
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
    };
  }

  componentDidMount() {
    this.returnFavs();
  }

  addFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    console.log(song);
    await addSong(song);
    this.setState({ loading: false });
  };

  removeFav = async () => {
    const { song } = this.props;
    this.setState({ loading: true });
    await removeSong(song);
    this.setState({ loading: false });
  };

  handleFavs = ({ target }) => {
    console.log(target);
    if (this.state.checked) {
      this.setState({ checked: !this.state.checked }, this.removeFav)
    } else {
      this.setState({ checked: !this.state.hecked }, this.addFav)
    }

  };

  returnFavs = async () => {
    const { song } = this.props;
    const favs = await getFavoriteSongs();
    const favsSongs = favs.some((msc) => msc.trackId === song.trackId);
    this.setState({ checked: favsSongs });
  };

  render() {
    const { song } = this.props;
    const { trackName, previewUrl } = song;
    const { loading, checked } = this.state;
    return (
      <CardMusic>
        {loading && <Loading />}
        <h4>{trackName}</h4>
        <audio src={previewUrl} controls>
          <track kind="captions" />
          Your browser doesn't support the element! <code>audio</code>
        </audio>
        <label htmlFor="favorite">

          <Button id={song.trackId} className="mt-3 bg-dark" onClick={this.handleFavs}>
            {checked ? <AiFillStar /> : <AiOutlineStar />}
          </Button>

        </label>
      </CardMusic>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MusicCard;
