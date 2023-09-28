import styled from 'styled-components';
import Logo from './../components/Main/Logo';
import Folder from './../components/Main/Folder';
import MainAnimation from './../components/Main/MainAnimation';

export default function Main() {
  return (
    <>
      <MainWrapper>
        <Logo />
        <Folder />
        <MainAnimation />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  background: ${(props) => props.theme.colors.black};
`;
