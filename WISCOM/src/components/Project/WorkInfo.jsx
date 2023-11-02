import * as W from './ProjectStyle';

const WorkInfo = ({ data }) => {
  return (
    <W.WorkContainer>
      {data && (
        <>
          <W.WorkLogo src={`http://13.124.248.135/${data.logo}`} alt="작품 로고" />
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
