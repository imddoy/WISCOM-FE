const HashTag = ({ hashtags }) => {};

const WorkInfo = ({ workLogoSrc, WorkTitle, teamName, text }) => {
  return (
    <div className="Work-container">
      <div className="work-logo">
        <img src={workLogoSrc} alt="작품 로고" />
      </div>
      <div className="work-info">
        <h1>{WorkTitle}</h1>
        <p>{teamName}</p>
      </div>
      <div className="hash-tag-up-line">{text}</div>
      <div className="hash-tag-down-line">{text}</div>
    </div>
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
