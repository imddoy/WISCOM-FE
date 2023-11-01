import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 가져오기
import * as W from './ProjectStyle';

const WorkInfo = () => {
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
    <W.WorkContainer>
      {data && (
        <>
          <W.WorkLogo src={`https://dswuwis.store/${data.logo}`} alt="작품 로고" />
          <W.WorkInfoContent>
            <W.Text fs="60px">{data.title}</W.Text>
            <W.Text fs="50px">{data.team}</W.Text>
            <W.HashtagContainer>
              {/* 팀이 설정한 해시태그 */}
              <W.HashtagUpLine>
                <W.HashtagGreen>#</W.HashtagGreen>
                <W.HashtagYellow>{data.tags.posts[0]}</W.HashtagYellow>
                <W.HashtagOrange>{data.tags.posts[1]}</W.HashtagOrange>
                <W.HashtagPurple>{data.tags.posts[2]}</W.HashtagPurple>
              </W.HashtagUpLine>
              {data.tags.comments.length > 0 && (
                <W.HashtagDownLine>
                  <W.HashtagLightblue>{data.tags.comments[0]}</W.HashtagLightblue>
                  <W.HashtagPink>♡</W.HashtagPink>
                  <W.HashtagBlue>{data.tags.comments[1]}</W.HashtagBlue>
                </W.HashtagDownLine>
              )}
            </W.HashtagContainer>
          </W.WorkInfoContent>
        </>
      )}
    </W.WorkContainer>
  );
};
export default WorkInfo;
