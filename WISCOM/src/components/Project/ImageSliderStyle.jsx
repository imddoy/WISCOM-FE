import styled from 'styled-components';

export const BannerWrap = styled.div`
  text-align: center;
  max-width: 1100px;
  height: 600px;
  margin-bottom: 20%;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 1250px) and (max-width: 1440px) {
    margin-left: 100px;
  }

  @media (max-width: 834px) {
    max-width: 540px; /* 미디어 쿼리에서도 너비 설정 */
    height: 340px;
  }

  @media (min-width: 600px) and (max-width: 834px) {
    margin-left: 10%;
  }

  @media (max-width: 393px) {
    max-width: 330px; /* 미디어 쿼리에서도 너비 설정 */
    height: 210px;
  }
`;

export const SlideBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover .preArrow,
  &:hover .nextArrow {
    cursor: pointer;
    opacity: 1;
    transition: 0.7s;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  position: absolute;
  left: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  &.active {
    opacity: 1;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 250px;
  width: 70px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  border-radius: 5px;
  opacity: 0;

  img {
    width: 70px;
  }
`;

export const PreArrow = styled(Arrow)`
  left: 0;
`;

export const NextArrow = styled(Arrow)`
  right: 0;
`;
