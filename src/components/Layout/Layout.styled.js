import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  padding: 10px 0;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 7px 14px, rgba(0, 0, 0, 0.22) 0px 5px 5px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  &:hover,
  &:focus {
    color: pink;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #ffc0cb;
  }
`;
