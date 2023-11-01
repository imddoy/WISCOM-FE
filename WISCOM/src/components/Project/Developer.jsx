import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 가져오기
import * as D from './ProjectStyle';
import DeveloperProfile from './DeveloperProfile.jsx';

import BackBlue from '../../img/Project/BackgroundBlue.svg';
import BackGreen from '../../img/Project/BackgroundGreen.svg';
import BackYellow from '../../img/Project/BackgroundYellow.svg';

const backgroundImages = [BackGreen, BackBlue, BackGreen, BackYellow];

// 재사용 쉽도록 수정
const Developer = () => {
  const [data, setData] = useState(null);
  const { post_id } = useParams();

  useEffect(() => {
    // 정적 URL을 사용하여 데이터를 가져옵니다.
    fetch(`https://dswuwis.store/posts/${post_id}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('가져와짐'); // 데이터를 성공적으로 가져온 후에 로깅
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [post_id]);

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
