import React from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
// import ListAlbums from "../components/ListAlbums";
import topAlbumsAPI from "../services/topAlbumsAPI";
import { NotFound } from "../styles/pages/Search";
import { ListTop} from "../styles/pages/TopAlbums";

class TopAlbums extends React.Component {
    constructor() {
        super();

        this.state = {
            Loading: false,
            response: [],
        };

    }

    componentDidMount() {
        this.fetchAlbums()
    }

    fetchAlbums = async () => {
        this.setState({ loading: true });
        const response = await topAlbumsAPI();
        this.setState({ loading: false, response });
        console.log(response);
    };

    render() {
        const { loading, response } = this.state;
        return (
            <div>
                <Header />
                <h1 style={{ textAlign: "center", marginTop: 100 }}>Top Albums</h1>
                {loading ? (
                    <Loading />
                ) : (
                    response.length > 0 ? (
                        response.map((item, index) =>
                            <ListTop key={index}>
                                {/* <h3>{index+1}</h3> */}
                                <img src={item.artworkUrl100} alt="poster"/>
                                <h1>{item.collectionName}</h1>
                                <h2>{item.artistName}</h2>
                            </ListTop>
                        )

                    ) : (
                        <NotFound />
                    )
                )}
            </div>
        )
    }
}

export default TopAlbums;