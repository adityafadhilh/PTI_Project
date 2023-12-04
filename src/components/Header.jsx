import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { getUser } from "../services/userAPI";
import { MainHeader } from "../styles/components/Header";
import LogoNavbar from "../assets/images/LogoNavbar.png";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      nome: user.name,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <header>
        {loading ? (
          <Loading />
        ) : (
          <MainHeader>
            <nav>
              <img src={LogoNavbar} alt="logoNavbar" />
              <Link to="/search" data-testid="link-to-search">
                Home
              </Link>
              <Link to="/favorites" data-testid="link-to-favorites">
                Favorite
              </Link>
              <Link to="/aboutus" data-testid="link-to-aboutus">
                About Us
              </Link>
            </nav>
          </MainHeader>
        )}
      </header>
    );
  }
}

export default Header;
