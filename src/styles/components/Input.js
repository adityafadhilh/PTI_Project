import styled from "styled-components";

export const Input = styled.input`
  line-height: 25px;
  border: 2px solid transparent;
  border-bottom-color: white;
  padding: 0.5rem 20px;
  outline: none;
  margin-top: 20px;
  background-color: transparent;
  color: black;
  font-size: 15px;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  :focus,
  :hover {
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border-color: white;
  }

  ::placeholder {
    color: black;
  }

  :focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
