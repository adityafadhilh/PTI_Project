import styled from "styled-components";

export const Section = styled.section`
  background-color: #f5f5f5;
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
`;

export const TeamTitle = styled.h2`
  font-size: 30px;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ImageCaption = styled.p`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 100px;
`;
