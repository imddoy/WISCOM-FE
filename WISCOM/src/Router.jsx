import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Main from './page/Main';
import Guestbook from './page/Guestbook';
import Project from './page/Project';
import Developer from './page/Developer';
import Nav from './components/common/Nav/Nav';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/project" element={<Project />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </GlobalWrapper>
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  @media screen and (min-width: 834px) {
    padding: 8rem;
  }
  @media screen and (max-width: 833px) {
    padding: 5rem;
  }
`;
