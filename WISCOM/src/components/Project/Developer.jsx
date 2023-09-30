import * as D from './ProjectStyle';
import DeveloperProfile from './DeveloperProfile.jsx';

const Developer = () => {
  return (
    <D.DeveloperContainer>
      <D.DeTitle>DEVELOPER</D.DeTitle>
      <D.UpBox>
        <DeveloperProfile />
        <DeveloperProfile />
      </D.UpBox>

      <D.DownBox>
        <DeveloperProfile />
        <DeveloperProfile />
      </D.DownBox>
    </D.DeveloperContainer>
  );
};
export default Developer;
