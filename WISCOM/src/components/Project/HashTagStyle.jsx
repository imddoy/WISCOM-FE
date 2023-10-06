import styled from 'styled-components';

export const HashTagWrapper = styled.div`
  width: 150px;
  height: 70px;
  border-radius: 50px;
  background-color: #75ff72;
  color: #000;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 321px) and (max-width: 393px) {
    width: 95px;
    height: 25px;
  }

  @media screen and (min-width: 394px) and (max-width: 530px) {
    width: 100px;
    height: 30px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    width: 110px;
    height: 40px;
  }

  @media screen and (min-width: 701px) and (max-width: 900px) {
    width: 140px;
    height: 50px;
  }
`;

export const ClickedHashTagWrapper = styled.div`
  width: 150px;
  height: 70px;
  border-radius: 50px;
  background-color: #75ff72;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0px 5px 5px 5px rgb(0, 0, 0, 0.5) inset;

  @media screen and (min-width: 321px) and (max-width: 393px) {
    width: 95px;
    height: 25px;
  }

  @media screen and (min-width: 394px) and (max-width: 530px) {
    width: 100px;
    height: 30px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    width: 110px;
    height: 40px;
  }

  @media screen and (min-width: 701px) and (max-width: 900px) {
    width: 140px;
    height: 50px;
  }
`;

export const HashTagSpan = styled.div`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 393px) {
    font-size: 8px;
  }

  @media screen and (min-width: 394px) and (max-width: 530px) {
    font-size: 11px;
  }

  @media screen and (min-width: 530px) and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (min-width: 701px) and (max-width: 900px) {
    font-size: 24px;
  }
`;
