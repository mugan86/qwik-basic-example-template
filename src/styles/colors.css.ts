import { styled } from 'styled-vanilla-extract/qwik';

const contentBlockClass = (height: number) => `
    display: block;
    width: 100%;
    height: ${height}px;
`;
export const RedBox = styled.div`
  ${contentBlockClass(100)}
  background: red;
`;

export const OrangeBox = styled.div`
  ${contentBlockClass(200)}
  background: orange;
`;

export const GreenBox = styled.div`
  ${contentBlockClass(200)}
  background: green;
`;
