import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: inline-flex;
  width: 100%;
  min-height: 50px;
  padding: 10px 0;
  border-bottom: 5px;
  box-shadow: 0px 7px 10px -2px rgba(132, 132, 132, 0.5);
  & > div {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
    @media screen and (min-width: 768px) {
      max-width: 800px;
      min-height: 70px;
    }
  }
`;

export const PageNav = styled.nav`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 320px) {
    gap: 15px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const AuthNav = styled.nav`
  display: flex;
  gap: 10px;
  @media screen and (min-width: 320px) {
    gap: 15px;
  }
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  &.active {
    color: #e776aa;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #e776aa;
  }
`;

export const StyledLogoLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    font-size: 25x;
  }
  &.active {
    color: #e776aa;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color:  #f01f7f;
  }
`;




export const Container = styled.div`
  display:'flex';
  flex-direction:'column';
  align-items: 'center';
  justify-content:  'center';
  width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 40px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    max-width: 800px;
  }
`;

