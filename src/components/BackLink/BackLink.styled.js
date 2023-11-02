import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 4px;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid beige;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: lightblue;
  }
`;
