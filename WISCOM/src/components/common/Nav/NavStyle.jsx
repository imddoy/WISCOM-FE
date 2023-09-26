import styled from 'styled-components';
import Logo from '../../../img/Nav/Logo.svg';

export const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3em;
  padding-bottom: 8em;
`;

export const NavContent = styled.div`
  display: flex;
  margin-bottom: 90px;
  justify-content: end;
`;

export const NavTag = styled.a`
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #75ff72;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  &:hover {
    color: white;
  }
`;

export const LogoImg = styled.div`
  background-image: url(${Logo});
  width: 320px;
  height: 192px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;
