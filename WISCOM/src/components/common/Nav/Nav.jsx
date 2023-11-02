import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as N from './NavStyle';
import NavList from './NavList';

const Nav = () => {
  const [Title, setTitle] = useState('');
  const location = useLocation(null);

  useEffect(() => {
    setTitle(location.pathname.slice(1).toUpperCase());
  });

  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.NavTag href="/project">PROJECT</N.NavTag>
        <N.NavTag href="/guestbook">GUESTBOOK</N.NavTag>
        <N.NavTag href="/chatbot">CHATBOT</N.NavTag>
        {/* <N.NavTag href="https://dswuwis.store/chatbot" target="_blank">
          CHATBOT
        </N.NavTag> */}
        <N.NavTag href="/project">QR-CODE</N.NavTag>
        <N.NavTag href="/developer">DEVELOPER</N.NavTag>
        <NavList />
      </N.NavContent>

      <N.LogoImg>
        <N.Text>{Title}</N.Text>
      </N.LogoImg>
    </N.NavWrapper>
  );
};

export default Nav;
