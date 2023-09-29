import './DeveloperProfile.css';
const DeveloperProfile = ({ developerName, backgroundSrc, developerImgSrc }) => {
  return (
    <div className="developer-profile">
      <div className="developer-background">
        <img src={backgroundSrc} alt="배경 이미지" />
      </div>
      <div className="developer-image">
        <img src={developerImgSrc} alt="개발자 이미지" />
      </div>
      <p>{developerName}</p>
    </div>
  );
};

export default DeveloperProfile;
