import styled from 'styled-components';

export const ImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  --arrow-size: 90px; /* 화살표 크기 변수 설정 */
  position: relative; /* 부모 클래스에 relative 포지션을 추가 */

  margin-bottom: 200px;
`;

export const SliderBannerWrap = styled.div`
  width: 100%;
  max-width: 1100px;
  position: relative;
  aspect-ratio: 11 / 7; /* 가로 세로 비율을 11:7로 고정 */

  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;

  justify-content: center;
  margin: 0 auto; /* 필수!!!!! */

  margin-left: 10%;
  margin-right: 10%;
`;

export const SlideBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  width: var(--arrow-size);
  height: calc(var(--arrow-size) * 1.43);
  display: flex;
  transition: opacity 0.8s ease-in-out;

  @media (max-width: 1000px) {
    width: 60px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(60px * 1.43);
  }

  @media (max-width: 768px) {
    width: 50px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(50px * 1.43);
  }

  @media (max-width: 550px) {
    width: 40px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(40px * 1.43);
  }

  @media (max-width: 426px) {
    width: 30px; /* 화면이 850px보다 작을 때 화살표 크기를 60px로 조절 */
    height: calc(30px * 1.43);
  }
`;

export const PreArrow = styled(Arrow)`
  left: 0;
  transform: rotate(180deg); /* 세로 가운데 정렬을 위해 추가 */
`;

export const NextArrow = styled(Arrow)`
  right: 0;
`;
