import { style, styled} from 'styled-vanilla-extract/qwik';

export const RedBox = styled.div`
  display: block;
  width: 100%;
  height: 100px;
  background: red;
`;

const contenBlockClass = {
    display: 'block',
    width: '100%',
    height: '200px',
};

export const orangeClass = style({
    ...contenBlockClass,
    background: 'orange',
});

export const greenClass = style({
    ...contenBlockClass,
    background: 'green',
});