import styled from "styled-components";

export const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;

  nav {
    display: flex;
    flex-direction: row;
    padding-left: 200px;
    gap: 2rem;
    align-items: center;
  }

  nav > a {
    text-decoration: none;
    font-weight: bold;
    margin-top: 0; /* Ubah margin-top menjadi 0 agar item-menu tidak terlalu ke bawah */
    color: black;
  }

  nav > a:hover {
    color: #090979;
  }

  nav > img {
    max-width: 20%;
    max-height: 20%; /* Ubah width dan height menjadi max-width dan max-height agar proporsi gambar tetap terjaga */
  }

  @media (max-width: 400px) {
    height: 8%;

    nav,
    h3 {
      padding: 1rem;
    }

    nav > img {
      display: none; /* Sembunyikan gambar saat lebar layar kurang dari 400px */
    }
  }
`;
