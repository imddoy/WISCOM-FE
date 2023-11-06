import styled from 'styled-components';


export const DevWrapper = styled.div`
place-items: center;
`;

export const Box = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0,1fr));
place-items: center;

@media screen and (min-width: 320px) {

}

@media screen and (min-width: 393px) {

}

@media screen and (min-width: 834px) {

}
`;

/*Developer 부분*/
export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 15rem;
  padding-right: 15rem; */

  /* @media screen and (min-width: 1100px) and (max-width: 1300px) {
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
  }*/
`;

/*DeveloperProfile 부분*/
export const DeveloperProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center; //center or this
  width: 250px;
  height: 20vw;
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
  top: 18vw;

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

