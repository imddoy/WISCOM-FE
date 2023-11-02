import styled from 'styled-components';

export const BannerWrap = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 1440px;
  height: 600px;
  margin-bottom: 20%;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  --arrow-size: 70px; /* 화살표 크기 변수 설정 */

  @media (max-width: 1442px) {
    width: 100%;
    height: 710px;
  }

  @media (max-width: 1350px) {
    width: 100%;
    height: 650px;
  }

  @media (max-width: 1250px) {
    width: 100%;
    height: 600px;
  }

  @media (max-width: 1165px) {
    width: 100%;
    height: 500px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 460px;
    --arrow-size: 60px; /* 미디어 쿼리에서 화살표 크기 조절 */
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 420px;
    --arrow-size: 50px; /* 미디어 쿼리에서 화살표 크기 조절 */
  }

  @media (max-width: 850px) {
    width: 100%;
    height: 380px;
    --arrow-size: 40px; /* 미디어 쿼리에서 화살표 크기 조절 */
  }

  @media (max-width: 690px) {
    width: 100%;
    height: 280px;
    --arrow-size: 30px; /* 미디어 쿼리에서 화살표 크기 조절 */
  }

  @media (max-width: 525px) {
    width: 100%;
    height: 200px;
    --arrow-size: 20px; /* 미디어 쿼리에서 화살표 크기 조절 */
  }

  @media (max-width: 393px) {
    max-width: 330px;
    height: 150px;
    --arrow-size: 15px; /* 미디어 쿼리에서 화살표 크기 조절 */
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
  top: 50%; /* 세로 가운데 정렬 */
  width: var(--arrow-size);
  height: calc(var(--arrow-size) * 1.43);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  border-radius: 5px;
  opacity: 0; /* 처음에는 화살표를 보이지 않게 설정 */

  &:hover {
    opacity: 1; /* 마우스 호버 시에만 화살표를 보이도록 설정 */
  }
`;

export const PreArrow = styled(Arrow)`
  left: 0;
  transform: translateY(-50%); /* 세로 가운데 정렬을 위해 추가 */
`;

export const NextArrow = styled(Arrow)`
  right: 0;
  transform: translateY(-50%); /* 세로 가운데 정렬을 위해 추가 */
`;
