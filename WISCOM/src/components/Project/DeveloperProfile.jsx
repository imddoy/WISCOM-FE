import * as DP from './ProjectStyle';

const DeveloperProfile = (props) => {
  return (
    <DP.DeveloperProfileContainer>
      {props && (
        <>
          <DP.DeveloperImg src={`http://13.124.248.135/${props.image}`} bg={props.bg} alt="개발자 이미지" />
          <DP.Name>{props.name}</DP.Name>
          <DP.Impression>{props.impression}</DP.Impression>
        </>
      )}
    </DP.DeveloperProfileContainer>
  );
};

export default DeveloperProfile;
