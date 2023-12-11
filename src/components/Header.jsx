import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { getUser } from "../services/userAPI";
import { MainHeader } from "../styles/components/Header";
import LogoNavbar from "../assets/images/LogoNavbar.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    setLoading(true)
    // const user = await getUser()
    // setName(user.name)
    setLoading(false)
  });

  return (

    // <header>
      // {loading ? (
      //   <Loading />
      // ) : (
    //     <MainHeader>
    //       <nav>
    //         <img src={LogoNavbar} alt="logoNavbar" />
    // <Link to="/search" data-testid="link-to-search">
    //   Home
    // </Link>
    // <Link to="/favorites" data-testid="link-to-favorites">
    //   Favorite
    // </Link>
    // <Link to="/topalbums" data-testid="link-to-topalbums">
    //   Top Album
    // </Link>
    // <Link to="/aboutus" data-testid="link-to-aboutus">
    //   About Us
    // </Link>
    //       </nav>
    //     </MainHeader>
    //   )}
    // </header>
    
    <Navbar fixed="top" expand="lg" bg="light">
      <Container>
        {/* <img src={LogoNavbar} alt="logoNavbar" width={70} /> */}
        <Navbar.Brand href="/search">ASDIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center" style={{ flex: 1 }}>
            <Nav.Link href="/search">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorite</Nav.Link>
            <Nav.Link href="/topalbums">Top Album</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// class Header extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       loading: false,
//     };
//   }

//   async componentDidMount() {
//     this.setState({ loading: true });
//     const user = await getUser();
//     this.setState({
//       name: user.name,
//       loading: false,
//     });
//   }

//   render() {
//     const { loading } = this.state;
//     return (
{/* <header>
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
        <Link to="/topalbums" data-testid="link-to-topalbums">
          Top Album
        </Link>
        <Link to="/aboutus" data-testid="link-to-aboutus">
          About Us
        </Link>
      </nav>
    </MainHeader>
  )}
</header> */}
//     );
//   }
// }

export default Header;
