import styled from 'styled-components';

export const LayoutStyled = styled.ul`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  box-shadow: 0 4px 2px -2px gray;
  & li {
    list-style: none;
    font-size: 20px;
    & .active {
      color: orangered;
    }
    & a {
      text-decoration: none;
    }
  }
`;
