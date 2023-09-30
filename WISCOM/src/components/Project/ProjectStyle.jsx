import styled from 'styled-components';

/*WorkInof 부분*/

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #20217d;
  margin-bottom: 11.6rem;
  margin-top: 5.7rem;
`;

export const WorkLogo = styled.img`
  border-radius: 320px;
  width: 20rem;
  height: 20rem;
`;

export const WorkInfoContent = styled.div`
  margin-left: 8.2rem;
`;

export const Text = styled.div`
  color: #20217d;
  text-align: center;
  font-size: ${(props) => props.fs};
  font-weight: 600;
  line-height: normal;
`;

/*IntroWork 부분*/

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 40rem;
`;

export const PrjDetail = styled.div`
  font-size: 4rem;
  color: #20217d;
  font-weight: 700;
  margin-bottom: 9rem;
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const DeTitle = styled.div`
  color: #20217d;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 90px;
`;

export const UpBox = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
export const DownBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  width: 20rem;
  height: 20rem;
  font-size: 3rem;
  color: #20217d;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15rem;
  margin-right: 15rem;
`;

export const Background = styled.div`
  width: 300px;
  height: 300px;

  background-image: url(${(props) => props.url});
`;

export const DeveloperImg = styled.img`
  width: 170px;
  height: 170px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.url});

  margin-bottom: 2.5rem;
`;

export const Name = styled.div``;
