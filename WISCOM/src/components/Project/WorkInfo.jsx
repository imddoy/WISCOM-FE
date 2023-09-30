import * as W from './ProjectStyle';
import Circle from '../../img/Project/Circle.svg';

const HashTag = ({ hashtags }) => {};

const WorkInfo = () => {
  return (
    <W.WorkContainer>
      <W.WorkLogo src={Circle} alt="작품 로고" />

      <W.WorkInfoContent>
        <W.Text fs="60px">WorkTitle</W.Text>
        <W.Text fs="48px">teamName</W.Text>
        {/* <div className="hash-tag-up-line">해시태그</div>
        <div className="hash-tag-down-line">해시태그</div> */}
      </W.WorkInfoContent>
    </W.WorkContainer>
  );
};
export default WorkInfo;

/*해쉬태그 css 만들기
.hash-tag {
  font-size: 50px;
  background-color: #75ff72;
  color: black;
  border-radius: 70%;
}
.hash-tag-yellow {
  font-size: 16px;
  background-color: #fff500;
  color: black;
  border-radius: 30px;
}
.hash-tag-orange {
  font-size: 16px;
  background-color: #ff6b00;
  color: white;
  border-radius: 30px;
}
.hash-tag-heart {
  font-size: 50px;
  background-color: #feaeec;
  color: white;
  border-radius: 30px;
}
.hash-tag-lightblue {
  font-size: 16px;
  background-color: #86d4fd;
  color: white;
  border-radius: 30px;
}
.hash-tag-blue {
  font-size: 16px;
  background-color: #4578af;
  color: white;
  border-radius: 30px;
}

.hash-tag-purple {
  font-size: 16px;
  background-color: #3239a1;
  color: #feaeec;
  border-radius: 30px;
}
8*/
