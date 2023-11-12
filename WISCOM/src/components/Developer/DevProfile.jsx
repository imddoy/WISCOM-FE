import * as DP from './DevsStyle';

const DeveloperProfile = (props) => {
  return (
    <DP.DeveloperProfileContainer>
      {props && (
        <>
          <DP.DeveloperImg>
            <DP.BackgroundImg src={props.bg} />
            <DP.PersonalImg src={`http://15.164.167.225/${props.image}`} bg={props.bg} alt="개발자 이미지" />
          </DP.DeveloperImg>
          <DP.Name>{props.name}</DP.Name>
          <DP.Impression>{props.impression}</DP.Impression>
        </>
      )}
    </DP.DeveloperProfileContainer>
  );
};

export default DeveloperProfile;
