import styled from 'styled-components';

export const MenuTrigger = styled.div`
  cursor: pointer;
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #75ff72;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.25rem;
  z-index: 100;

  &:hover {
    color: white;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25) inset;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0px;
    width: 110px;
    height: 40px;
  }
  @media screen and (max-width: 300px) {
    margin-right: -10px;
  }

  span {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`;

export const MenuSpan = styled.span``;

export const MenuInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  background-color: rgb(0, 0, 0);
`;

export const MenuBackGround = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 0;
`;
export const MenuInnerWrapper = styled.div`
  position: relative;
  padding-left: 22px;
`;

export const MenuItemList = styled.ul`
  position: relative;
  z-index: 1;
`;

export const M_a = styled.a``;
export const MenuItemLi = styled.li`
  margin-bottom: 2rem;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 50px;
    line-height: 50px;
    text-transform: uppercase;
    display: block;

    font-weight: 900;
    &:hover {
      color: #90fe79;
    }
    @media screen and (max-width: 400px) {
      font-size: 35px;
    }
  }
`;
