import styled from "styled-components";

export const MainAlbums = styled.div`
  display: contents;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const DivAlbums = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  margin-top: -250px;
  color: white;
  div {
    background-color: #000000;
    border: 2px solid transparent;
    border-radius: 13px;
    min-height: 320px;
    width: 20%;
    overflow: hidden;
    flex-wrap: wrap;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
    padding: 5px;
    margin-bottom: 50px;

    a {
      color: #27c083;
      font-weight: bold;
    }

    img {
      border: 2px solid transparent;
      border-radius: 10%;
    }
    
  }

  @media (max-width: 890px) {
    width: 100%;

    div {
      width: 40%;
    }
  }

  @media (max-width: 495px) {
    div {
      width: 60%;
    }
  }
`;
