import styled from 'styled-components';

export const HashTagWrapper = styled.div`
  width: 150px;
  height: 70px;
  border-radius: 50px;
  background-color: #75ff72;
  color: #000;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//export const ClickedHashTagWrapper = styled(HashTagWrapper)`
//color: white;
//box-shadow: 0px 5px 5px 5px rgb(0, 0, 0, 0.5) inset;
//`;

export const HashTagSpan = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
