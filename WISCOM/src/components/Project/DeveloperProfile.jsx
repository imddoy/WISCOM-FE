import * as DP from './ProjectStyle';
import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';
import Ddoy from '../../img/Project/DDOY.svg';

const DeveloperProfile = () => {
  return (
    <DP.DeveloperProfileContainer>
      <DP.DeveloperImg src={Ddoy} url={BackBlue} alt="개발자 이미지" />
      <DP.Name>김채현</DP.Name>
    </DP.DeveloperProfileContainer>
  );
};

export default DeveloperProfile;
