import { useState, useEffect } from 'react';
import * as I from './ProjectStyle';
import { useParams } from 'react-router-dom'; // useParams 가져오기

const IntroWork = () => {
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

  const handleClickServiceURL = () => {
    if (data && data.service_url) {
      window.location.href = data.service_url;
    }
  };

  return (
    <I.IntroContainer>
      {data && (
        <>
          <I.PrjDetail>{data.content}</I.PrjDetail>
          <I.PrjURL onClick={handleClickServiceURL}>{data.service_url}</I.PrjURL>
        </>
      )}
    </I.IntroContainer>
  );
};

export default IntroWork;
