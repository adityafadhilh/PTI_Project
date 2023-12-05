import styled from "styled-components"

export const ListTop = styled.div`
display: flex;
flex-direction: row;
margin-top: 2rem;
margin-bottom: 5rem;
text-align: center;
width: 75%;
margin-left: auto;
margin-right: auto;
background-color: black;
color: white;
border: 2px solid transparent;
border-radius: 13px;
min-height: 320px;
justify-content: space-around;
align-items: center;
padding-left: 20px;
padding-right: 20px;

h1 {
    font-weight: bolder;
}

img {
    width: 200px;
}

@media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 100px;
    }
  }
`;