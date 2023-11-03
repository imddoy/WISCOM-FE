import styled from 'styled-components';

/*WorkInof 부분*/

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #20217d;
  margin-bottom: 11.6rem;
  margin-top: 5.7rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 319px) and (max-width: 426px) {
    font-size: 3rem;
  }
`;

export const WorkLogo = styled.img`
  border-radius: 320px;
  margin-left: 22rem;
  width: 30rem;
  height: 30rem;

  @media screen and (min-width: 931px) and (max-width: 1030px) {
    margin-left: 20rem;
    margin-right: -12rem;
    width: 25rem;
    height: 25rem;
  }

  @media screen and (min-width: 893px) and (max-width: 931px) {
    margin-left: 20rem;
    margin-right: -11rem;
    width: 25rem;
    height: 25rem;
  }
  @media screen and (min-width: 814px) and (max-width: 893px) {
    margin-left: 20rem;
    margin-right: -10rem;
    width: 22.5rem;
    height: 22.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 814px) {
    margin-left: 5rem;
    margin-right: 0rem;
    width: 22.5rem;
    height: 22.5rem;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 30px;
    width: 22rem;
    height: 22rem;
  }

  @media screen and (min-width: 319px) and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 30px;
    width: 15rem;
    height: 15rem;
  }
`;

export const WorkInfoContent = styled.div`
  margin-right: 15rem;

  @media screen and (max-width: 814px) {
    margin: 0;
  }
`;

export const Text = styled.div`
  color: #20217d;
  text-align: left;
  font-size: ${(props) => props.fs};
  font-weight: 600;
  line-height: normal;
  margin-left: 8rem;
  padding-left: 5rem;

  @media (max-width: 1030px) {
    font-size: 95%;
  }

  @media screen and (max-width: 814px) {
    margin-left: 0rem;
    text-align: center;
    padding-left: 0rem;
  }

  @media (max-width: 768px) {
    font-size: 66%;
  }
`;

/*Hashtag 부분*/

export const HashtagContainer = styled.div`
  margin-left: 8rem;
  font-weight: bold;
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 24px;
  white-space: nowrap;
  left: 0;

  @media (max-width: 814px) {
    font-size: 18px;
    margin-left: 0rem;
  }

  @media screen and (max-width: 426px) {
    font-size: 15px;
  }

  @media screen and (max-width: 380px) {
    font-size: 9px;
  }
`;

export const HashtagUpLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 0;
  margin-bottom: 10px;

  @media (max-width: 410px) {
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

export const HashtagDownLine = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 20px;

  @media (max-width: 410px) {
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    margin-left: 10px;
  }
`;

export const HashtagGreen = styled.div`
  background-color: #75ff72;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #75ff72;
  border-radius: 30px;
`;

export const HashtagYellow = styled.div`
  background-color: #fff500;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #fff500;
  border-radius: 30px;
`;
export const HashtagOrange = styled.div`
  background-color: #ff6b00;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #ff6b00;
  border-radius: 30px;
`;

export const HashtagPurple = styled.div`
  background-color: #3239a1;
  color: #feaeec;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #3239a1;
  border-radius: 30px;
`;

export const HashtagLightblue = styled.div`
  background-color: #86d4fd;
  color: black;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #86d4fd;
  border-radius: 30px;
`;

export const HashtagPink = styled.div`
  background-color: #feaeec;
  color: white;
  border-radius: 30px;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #feaeec;
  border-radius: 30px;
`;

export const HashtagBlue = styled.div`
  background-color: #4578af;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  border: 10px solid #4578af;
  border-radius: 30px;
`;

/*IntroWork 부분*/

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PrjDetail = styled.div`
  font-size: 4rem;
  color: #20217d;
  font-weight: 700;

  @media (max-width: 1030px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 540px) {
    font-size: 2.5rem;
  }

  @media (max-width: 470px) {
    font-size: 2rem;
  }

  @media (max-width: 376px) {
    font-size: 1.5rem;
  }
`;

export const PrjURL = styled.div`
  font-size: 3rem;
  color: #20217d;
  font-weight: 700;
  margin-bottom: 9rem;

  @media (max-width: 1030px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media (max-width: 470px) {
    font-size: 1rem;
  }
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15rem;
  padding-right: 15rem;

  @media screen and (min-width: 1100px) and (max-width: 1300px) {
    padding-left: 7rem;
    padding-right: 2rem;
  }

  @media screen and (min-width: 950px) and (max-width: 1100px) {
    padding-left: 5rem;
    padding-right: 0rem;
  }

  @media screen and (min-width: 900px) and (max-width: 950px) {
    padding-left: 0.05rem;
    padding-right: 0.05rem;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    padding-left: 0.025rem;
    padding-right: 0.025rem;
  }

  @media screen and (min-width: 700px) and (max-width: 768px) {
    padding-left: 0.02rem;
    padding-right: 2rem;
  }

  @media screen and (min-width: 630px) and (max-width: 700px) {
    padding-left: 0.015rem;
    padding-right: 0.015rem;
  }

  @media screen and (min-width: 319px) and (max-width: 630px) {
    padding: 0;
  }
`;

export const DeTitle = styled.div`
  color: #20217d;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 90px;

  @media screen and (min-width: 768px) and (max-width: 1100px) {
    font-size: 50px;
    margin-left: -2rem;
  }

  @media screen and (min-width: 426px) and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 426px) and (max-width: 760px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 376px) and (max-width: 426px) {
    font-size: 20px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 319px) and (max-width: 376px) {
    font-size: 15px;
    margin-bottom: 20px;
    margin-left: -2rem;
  }
`;

export const UpBox = styled.div`
  display: flex;
  margin-bottom: 100px;

  @media screen and (min-width: 470px) and (max-width: 660px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: 319px) and (max-width: 470px) {
    margin-bottom: 50px;
  }
`;
export const DownBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center; //center or this
  width: 250px;

  margin-right: 15rem;

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    margin-right: 13rem;
  }

  @media screen and (min-width: 900px) and (max-width: 1100px) {
    margin-right: 10rem;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    margin-right: 5rem;
    margin-left: 0.1rem;
    width: 230px;
  }

  @media screen and (min-width: 700px) and (max-width: 768px) {
    margin-right: 4rem;
    margin-left: 0.1rem;
    width: 230px;
  }

  @media screen and (min-width: 630px) and (max-width: 700px) {
    margin-right: 2rem;
    margin-left: 0.1rem;
    width: 230px;
  }
  @media screen and (min-width: 550px) and (max-width: 630px) {
    margin-right: 1.5rem;
    margin-left: 0;
    width: 200px;
  }
  @media screen and (min-width: 500px) and (max-width: 550px) {
    margin-right: 3rem;
    margin-left: 0;
    width: 150px;
  }

  @media screen and (min-width: 450px) and (max-width: 500px) {
    margin-right: 6rem;
    margin-left: 0;
    width: 100px;
  }
  @media screen and (min-width: 400px) and (max-width: 450px) {
    margin-right: 6rem;
    margin-left: 0;
    width: 70px;
  }
  @media screen and (min-width: 319px) and (max-width: 400px) {
    margin-right: 4rem;
    margin-left: 0.02rem;
    width: 90px;
  }
`;

export const DeveloperImg = styled.img`
  width: 250px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.bg});

  margin-bottom: 2.5rem;

  @media screen and (min-width: 1100px) and (max-width: 1250px) {
    width: 180px;
  }

  @media screen and (min-width: 900px) and (max-width: 1100px) {
    width: 150px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 110px;
  }

  @media screen and (min-width: 700px) and (max-width: 768px) {
    width: 100px;
  }
  @media screen and (min-width: 550px) and (max-width: 700px) {
    width: 90px;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 350px) and (max-width: 550px) {
    width: 70px;
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 319px) and (max-width: 350px) {
    width: 50px;
    margin-bottom: 0.5rem;
  }
`;

export const Name = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #20217d;
  position: absolute;
  bottom: -20px;

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: 550px) and (max-width: 700px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 350px) and (max-width: 550px) {
    bottom: -15px;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 319px) and (max-width: 350px) {
    bottom: -10px;
    font-size: 1.3rem;
  }
`;

export const Impression = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #20217d;
  position: absolute;
  bottom: -50px;

  @media screen and (min-width: 700px) and (max-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    bottom: -40px;
  }

  @media screen and (min-width: 550px) and (max-width: 700px) {
    font-size: 1.5rem;
    bottom: -35px;
  }
  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-size: 1rem;
    bottom: -25px;
  }

  @media screen and (min-width: 319px) and (max-width: 350px) {
    font-size: 1rem;
    bottom: -20px;
  }
`;
