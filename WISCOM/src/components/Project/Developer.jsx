import * as D from './ProjectStyle';
import DeveloperProfile from './DeveloperProfile.jsx';

import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';

const backgroundImages = [BackGreen, BackBlue, BackGreen, BackYellow];

const Developer = ({ data }) => {
  return (
    <D.DeveloperContainer>
      {data && (
        <>
          <D.DeTitle>DEVELOPER</D.DeTitle>
          <D.UpBox>
            {data &&
              backgroundImages.slice(0, 2).map(
                (bg, index) =>
                  data.developer[index] && ( // 데이터가 존재하는지 확인
                    <DeveloperProfile
                      key={index}
                      bg={bg}
                      image={data.developer[index].image}
                      name={data.developer[index].name}
                      impression={data.developer[index].impression}
                    />
                  ),
              )}
          </D.UpBox>

          <D.DownBox>
            {data &&
              backgroundImages.slice(2).map(
                (bg, index) =>
                  data.developer[index + 2] && ( // 데이터가 존재하는지 확인
                    <DeveloperProfile
                      key={index}
                      bg={bg}
                      image={data.developer[index + 2].image}
                      name={data.developer[index + 2].name}
                      impression={data.developer[index + 2].impression}
                    />
                  ),
              )}
          </D.DownBox>
        </>
      )}
    </D.DeveloperContainer>
  );
};

export default Developer;
