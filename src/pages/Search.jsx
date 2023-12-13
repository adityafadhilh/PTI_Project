import React from "react";
import Header from "../components/Header";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import ListAlbums from "../components/ListAlbums";
import { MainSearch, NotFound } from "../styles/pages/Search";
import { Button } from "../styles/components/Button";
import { MainForm } from "../styles/components/Form";
import { Input } from "../styles/components/Input";
import { Spinner } from "react-bootstrap";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonDisabled: true,
      artistInput: "",
      loading: false,
      responseData: [],
    };
  }

  inputArtist = (e) => {
    const tamanho = e.target.value.length;

    if (tamanho >= 2) {
      this.setState({
        buttonDisabled: false,
        artistInput: e.target.value,
      });
    } else {
      this.setState({
        buttonDisabled: true,
        artistInput: e.target.value,
      });
    }
  };

  fetchArtist = async () => {
    const { artistInput } = this.state;
    try {
      this.setState({ loading: true });
      const response = await searchAlbumsAPI(artistInput);
      this.setState({ loading: false, responseData: response, artistInput: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { buttonDisabled, artistInput, loading, responseData } = this.state;
    return (
      <MainSearch>
        <Header />
        {loading ? (
          <div className="d-flex"><Spinner animation="border mx-auto" /></div>
        ) : (
          <MainForm>
            <h1 className="fw-bold text-dark mt-5">Search the artist:</h1>
            <label htmlFor="artist">
              <Input
                type="text"
                placeholder="Artist, album, song.."
                value={artistInput}
                onChange={this.inputArtist}
                className="fw-bolder text-dark"
              />
            </label>
            <Button
              type="submit"
              disabled={buttonDisabled}
              onClick={this.fetchArtist}
              className="searchButton"
            >
              Search
            </Button>
          </MainForm>
        )}
        {responseData.length > 0 ? (
          <ListAlbums {...this.state} />
        ) : (
          <NotFound></NotFound>
        )}
      </MainSearch>
    );
  }
}

export default Search;
