import { styled, keyframes } from 'styled-components';

export const drop = keyframes`
0%,
70%{
  left: 40vw;
  bottom: 60vw;
  opacity: 0;
}
75%{
  left: 40vw;
  bottom: 50vw;
`;
export const fadein = keyframes`
0%,50% {
  opacity: 0;
  transform: translate(0, -2vw);
}
100% {
  opacity: 1;
  transform: translate(0, 0);
}
`;

export const AnimationWrapper = styled.div`
  height: 65vw;
  position: relative;
  overflow: hidden;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: Pretendard;
  font-size: 1.4vw;
  text-align: center;
  width: 80vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  bottom: 45vw;
  left: 10vw;
  animation: ${fadein} 4s ease-in-out;
`;

export const Leading = styled.p`
  color: var(--LIGHTGREEN, #75ff72);
  text-align: center;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(90deg);
  bottom: 15vw;
  left: -5vw;
  animation: ${drop} 2s ease-out;
`;
export const Woman = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-25deg);
  left: 6vw;
  bottom: 12vw;
  animation: ${drop} 1.6s ease-out;
`;
export const Achieving = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 4vw;
  animation: ${drop} 1.6s ease-out;
`;
export const Developer = styled.p`
  color: var(--LIGHTGREEN, #75ff72);
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 0;
  animation: ${drop} 1.6s ease-out;
`;
export const Respect = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-70deg);
  bottom: 29vw;
  right: 28vw;
  animation: ${drop} 1.9s ease-out;
`;
export const Perfect = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 4vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  transform: rotate(-40deg);
  bottom: 6vw;
  right: 0;
  animation: ${drop} 1.6s ease-out;
`;
export const WebImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 22vw;
  left: 38vw;
  animation: ${drop} 1.9s ease-out;
`;
export const IosImg = styled.img`
  width: 14.8vw;
  position: absolute;
  bottom: 3vw;
  left: 22.5vw;
  animation: ${drop} 1.7s ease-out;
`;
export const UiImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 0;
  left: 31vw;
  animation: ${drop} 1.6s ease-out;
`;
export const DsceImg = styled.img`
  width: 22vw;
  position: absolute;
  left: 8.5vw;
  bottom: 22vw;
  animation: ${drop} 1.8s linear;
`;
export const MetaverseImg = styled.img`
  width: 22vw;
  position: absolute;
  bottom: 8vw;
  right: 28vw;
  animation: ${drop} 1.7s ease-out;
`;
export const AppImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 0;
  left: 46vw;
  margin-bottom: 1vw;
  animation: ${drop} 1.3s ease-out;
`;
export const AiImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 1vw;
  right: 16vw;
  animation: ${drop} 1.8s ease-out;
`;
export const GameImg = styled.img`
  width: 20vw;
  position: absolute;
  bottom: 9.5vw;
  right: 4vw;
  animation: ${drop} 1.7s ease-out;
`;
export const Star1 = styled.img`
  width: 3.5vw;
  position: absolute;
  bottom: 18vw;
  right: 46vw;
  animation: ${drop} 1.8s ease-out;
`;
export const Star2 = styled.img`
  width: 3.5vw;
  position: absolute;
  bottom: 0;
  right: 27vw;
  margin: 2vw;
  animation: ${drop} 1.6s ease-out;
`;
