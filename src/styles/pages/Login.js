import styled from "styled-components";

const MainLogin = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  img {
    height: auto;
    width: auto;
  }

  @keyframes translate {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-50px);
    }
    50% {
      transform: scale(1, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @media (max-width: 400px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default MainLogin;
