import { style } from 'styled-vanilla-extract/qwik';

const contenBlockClass = {
    display: 'block',
    width: '100%',
    height: '200px',
}

export const orangeClass = style({
    ...contenBlockClass,
    background: 'orange',
});

export const greenClass = style({
    ...contenBlockClass,
    background: 'green',
});