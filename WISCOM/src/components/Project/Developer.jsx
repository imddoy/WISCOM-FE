import * as D from './ProjectStyle';
import DeveloperProfile from './DeveloperProfile.jsx';

import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';

const backgroundImages = [BackGreen, BackBlue, BackGreen, BackYellow];

// 재사용 쉽도록 수정
const Developer = () => {
  return (
    <D.DeveloperContainer>
      <D.DeTitle>DEVELOPER</D.DeTitle>
      <D.UpBox>
        {backgroundImages.slice(0, 2).map((bg, index) => (
          <DeveloperProfile key={index} bg={bg} />
        ))}
      </D.UpBox>

      <D.DownBox>
        {backgroundImages.slice(2).map((bg, index) => (
          <DeveloperProfile key={index} bg={bg} />
        ))}
      </D.DownBox>
    </D.DeveloperContainer>
  );
};

export default Developer;
