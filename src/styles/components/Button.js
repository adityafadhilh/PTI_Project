import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: black;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  margin-top: 1rem;

  :hover {
    background: rgb(241, 241, 255);
    background: -moz-linear-gradient(
      90deg,
      rgba(241, 241, 255, 1) 0%,
      rgba(0, 148, 255, 1) 100%,
      rgba(31, 187, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(241, 241, 255, 1) 0%,
      rgba(0, 148, 255, 1) 100%,
      rgba(31, 187, 255, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(241, 241, 255, 1) 0%,
      rgba(0, 148, 255, 1) 100%,
      rgba(31, 187, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1ff",endColorstr="#1fbbff",GradientType=1);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
  }
`;
