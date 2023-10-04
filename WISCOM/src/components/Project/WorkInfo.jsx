import * as W from './ProjectStyle';
import Circle from '../../img/Project/Circle.svg';

const WorkInfo = () => {
  return (
    <W.WorkContainer>
      <W.WorkLogo src={Circle} alt="작품 로고" />

      <W.WorkInfoContent>
        <W.Text fs="60px">WorkTitle</W.Text>
        <W.Text fs="50px">teamName</W.Text>
        <W.HashtagContainer>
          <W.HashtagUpLine>
            <W.HashtagGreen>#</W.HashtagGreen>
            <W.HashtagYellow>해시태그</W.HashtagYellow>
            <W.HashtagOrange>해시태그</W.HashtagOrange>
            <W.HashtagPurple>해시태그</W.HashtagPurple>
          </W.HashtagUpLine>
          <W.HashtagDownLine>
            <W.HashtagLightblue>해시태그</W.HashtagLightblue>
            <W.HashtagPink>♡</W.HashtagPink>
            <W.HashtagBlue>해시태그</W.HashtagBlue>
          </W.HashtagDownLine>
        </W.HashtagContainer>
      </W.WorkInfoContent>
    </W.WorkContainer>
  );
};
export default WorkInfo;
