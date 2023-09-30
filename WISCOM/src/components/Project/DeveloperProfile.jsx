import * as DP from './ProjectStyle';
import Ddoy from '../../img/Project/DDOY.svg';

const DeveloperProfile = (props) => {
  return (
    <DP.DeveloperProfileContainer>
      <DP.DeveloperImg src={Ddoy} url={props.bg} alt="개발자 이미지" />
      <DP.Name>김채현</DP.Name>
    </DP.DeveloperProfileContainer>
  );
};

export default DeveloperProfile;
