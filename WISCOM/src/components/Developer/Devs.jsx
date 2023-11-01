import * as D from './DevsStyle';
import DeveloperProfile from '../Project/DeveloperProfile.jsx';
import { DeveloperContainer } from '../Project/ProjectStyle';

import BackBlue from '../../img/Developer/BackgroundBlue.svg';
import BackGreen from '../../img/Developer/BackgroundGreen.svg';
import BackYellow from '../../img/Developer/BackgroundYellow.svg';

const backgroundImages2 = [BackGreen, BackBlue, BackYellow];

function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const shuffledImages = shuffleArray(backgroundImages2);

function getRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * shuffledImages.length);
  return shuffledImages[randomIndex];
}

const Developer = () => {
  const images = [];
  for (let i = 0; i < 4; i++) {
    if (i === 3) {
      images.push(getRandomBackgroundImage());
    } else {
      images.push(shuffledImages[i]);
    }
  }

  return (
    <D.DevWrapper>
      <D.Box>
        {images.map((bg, index) => (
          <DeveloperContainer key={index}>
            <DeveloperProfile bg={bg} />
          </DeveloperContainer>
        ))}
      </D.Box>
    </D.DevWrapper>
  );
};

export default Developer;