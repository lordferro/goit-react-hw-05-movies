import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 4px 2px -2px gray;
`;

export const WrapperAdditional = styled.ul`
  box-shadow: 0 4px 2px -2px gray;
  padding: 10px;
`;

export const LinkStyled = styled(Link)`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  background-color: beige;
  padding: 5px;
  border: 1px solid grey;
`;
