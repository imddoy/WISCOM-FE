import './Developer.css';
import DeveloperProfile from './DeveloperProfile.jsx';

const Developer = () => {
  return (
    <div className="developer-container">
      <h1>DEVELOPER</h1>
      <div className="developer-up-box">
        <DeveloperProfile />
        <DeveloperProfile />
      </div>
      <div className="developer-down-box">
        <DeveloperProfile />
        <DeveloperProfile />
      </div>
    </div>
  );
};
export default DeveloperProfile;
