import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as N from './NavStyle';
import NavList from './NavList';

const Nav = () => {
  const [Title, setTitle] = useState('');
  const location = useLocation(null);

  const TeamList = [
    'HATCH',
    'DRAKE',
    'HIGHFIVE',
    '딱꼼',
    'IDEAL',
    '내마음을UNLOCK',
    '클래스메이트',
    '한울',
    '한소리',
    '사현희있어요',
    'AFORE',
  ];

  useEffect(() => {
    setTitle(location.pathname.slice(1).toUpperCase());
  });

  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.NavTag href="/map">PROJECT</N.NavTag>
        <N.NavTag href="/guestbook">GUESTBOOK</N.NavTag>
        <N.NavTag href="https://dswuwis.store/chatbot" target="_blank">
          CHATBOT
        </N.NavTag>
        <N.NavTag href="/developer">DEVELOPER</N.NavTag>
        <NavList />
      </N.NavContent>

      <N.LogoImg>
        <N.Text>{Title}</N.Text>
      </N.LogoImg>

      {location.pathname === '/map' && (
        <N.TeamWrapper>
          <N.TeamContent>
            {TeamList.map((team, index) => (
              <N.TeamName key={index}>{team}</N.TeamName>
            ))}
          </N.TeamContent>
          <N.Click>Click The Project</N.Click>
        </N.TeamWrapper>
      )}
    </N.NavWrapper>
  );
};

export default Nav;
