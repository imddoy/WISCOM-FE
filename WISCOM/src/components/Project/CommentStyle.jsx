import styled from 'styled-components';

export const CommentWrapper = styled.div``;
export const CommetTextBox = styled.div`
  margin: 20px auto;
  width: 1260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 45px;
  position: relative;
`;

export const CommentTagList = styled.div`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const CommentInput = styled.input`
  background-color: #000;
  border: none;
  resize: none;
  color: white;
  font-size: 30px;
  margin: 30px 30px 10px;
  font-family: 'Pretendard';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 30px;
    font-family: 'Pretendard';
  }
`;

export const CommentTextArea = styled.textarea`
  background-color: #000;
  border: none;
  resize: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 30px;
  height: 150px;
  font-family: 'Pretendard';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    font-size: 30px;
    font-family: 'Pretendard';
  }
`;

export const CommentCharCount = styled.p`
  color: #fff;
  position: absolute;
  bottom: 40px;
  right: 40px;
  font-size: 30px;
  font-weight: bold;
`;

export const CommentButton = styled.button`
  background-color: #75ff72;
  width: 378px;
  height: 75px;
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Pretendard';
  margin-bottom: 30px;
`;

export const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommentItem = styled.div`
  width: 30%;
  height: 439px;
  border-radius: 20px;
  background-color: #eeeeee;
  margin: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentInfoWrapper = styled.div``;

export const CommentInfo = styled.div`
  margin: 20px;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-right: 20px;
`;

export const CommentDate = styled.span`
  font-weight: bold;
  font-size: 25px;
`;

export const CommentContent = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 40px;
  max-height: 250px;
  overflow: auto;
`;

export const CommentTagsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CommentSelectedTag = styled.div`
  width: 130px;
  height: 65px;
  border-radius: 50px;
  background-color: #fff;
  color: #000;

  margin: 0 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentP = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
