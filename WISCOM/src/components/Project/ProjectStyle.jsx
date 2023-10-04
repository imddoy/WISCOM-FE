import styled from 'styled-components';

/*WorkInof 부분*/

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #20217d;
  margin-bottom: 11.6rem;
  margin-top: 5.7rem;
`;

export const WorkLogo = styled.img`
  border-radius: 320px;
  margin-left: 20rem;
  width: 30rem;
  height: 30rem;
`;

export const WorkInfoContent = styled.div`
  margin-right: 15rem;
`;

export const Text = styled.div`
  color: #20217d;
  text-align: center;
  font-size: ${(props) => props.fs};
  font-weight: 600;
  line-height: normal;
`;

/*Hashtag 부분*/

export const HashtagContainer = styled.div`
  margin-left: 8rem;
  font-weight: bold;
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 24px;
`;

export const HashtagUpLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 100px;
`;

export const HashtagDownLine = styled.div`
  margin-left: 130px;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const HashtagGreen = styled.div`
  background-color: #75ff72;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #75ff72;
  border-radius: 30px;
`;

export const HashtagYellow = styled.div`
  background-color: #fff500;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #fff500;
  border-radius: 30px;
`;
export const HashtagOrange = styled.div`
  background-color: #ff6b00;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #ff6b00;
  border-radius: 30px;
`;

export const HashtagPurple = styled.div`
  background-color: #3239a1;
  color: #feaeec;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #3239a1;
  border-radius: 30px;
`;

export const HashtagLightblue = styled.div`
  background-color: #86d4fd;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #86d4fd;
  border-radius: 30px;
`;

export const HashtagPink = styled.div`
  background-color: #feaeec;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #feaeec;
  border-radius: 30px;
`;

export const HashtagBlue = styled.div`
  background-color: #4578af;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #4578af;
  border-radius: 30px;
`;

/*IntroWork 부분*/

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 40rem;
`;

export const PrjDetail = styled.div`
  font-size: 4rem;
  color: #20217d;
  font-weight: 700;
  margin-bottom: 9rem;
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const DeTitle = styled.div`
  color: #20217d;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 90px;
`;

export const UpBox = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
export const DownBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  width: 20rem;
  height: 20rem;
  font-size: 3rem;
  color: #20217d;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15rem;
  margin-right: 15rem;
`;

export const Background = styled.div`
  width: 300px;
  height: 300px;

  background-image: url(${(props) => props.url});
`;

export const DeveloperImg = styled.img`
  width: 170px;
  height: 170px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.url});

  margin-bottom: 2.5rem;
`;

export const Name = styled.div``;

/*ScrollWork 부분*/

// Body 스타일
export const Body = styled.body`
  overflow: hidden;
  font-family: 'Roboto', serif;
  background: linear-gradient(135deg, black, #220033);
`;

// WorkImgContainer 컨테이너 스타일
export const WorkImgContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;

// WorkItem 스타일
export const WorkItem = styled.div`
  --items: 10;
  --width: clamp(150px, 30vw, 300px);
  --height: clamp(200px, 40vw, 400px);
  --x: calc(var(--active) * 800%);
  --y: calc(var(--active) * 200%);
  --rot: calc(var(--active) * 120deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  user-select: none;
  transform-origin: 0% 100%;
  box-shadow: 0 10px 50px 10px rgba(0, 0, 0, 0.5);
  background: black;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot));
  transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);
`;

// Carousel Box 스타일
export const WorkBox = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  opacity: var(--opacity);
  font-family: 'Orelo-sw-db', serif;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5)
    );
  }
`;

// Title 스타일
export const WorkTitle = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  bottom: 20px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 3vw, 30px);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

// Number 스타일
export const WorkNum = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 10px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 10vw, 80px);
`;

// 이미지 스타일
export const WorkImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

// 커서 스타일
export const Cursor = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
  transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
  display: none;
  pointer-events: none;

  @media (pointer: fine) {
    display: block;
  }
`;

export const Cursor2 = styled.div`
  --size: 2px;
  transition-duration: 0.7s;
`;
