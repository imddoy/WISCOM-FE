import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: 5rem;
  color: #d9d9d9;
  text-align: center;
  font-family: Zen Tokyo Zoo;
  padding: 2rem;

  @media screen and (min-width: 920px) {
    font-size: 20rem;
  }
  @media screen and (min-width: 695px) and (max-width: 920px) {
    font-size: 15rem;
  }
  @media screen and (min-width: 570px) and (max-width: 695px) {
    font-size: 12rem;
  }
  @media screen and (min-width: 480px) and (max-width: 570px) {
    font-size: 10rem;
  }
  @media screen and (min-width: 393px) and (max-width: 480px) {
    font-size: 8rem;
  }
  @media screen and (min-width: 350px) and (max-width: 393px) {
    font-size: 7rem;
  }
  @media screen and (min-width: 320px) and (max-width: 350px) {
    font-size: 6rem;
  }
  @media screen (min-width: 320px) {
    font-size: 5rem;
  }
`;
