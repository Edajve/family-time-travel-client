import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body, #root': {
                backgroundColor: 'background',
                fontFamily: 'defaultFont',
            },
        },
    },
    breakpoints: {
        xs: '320px',
        sm: '768px',
        md: '1024px',
        lg: '1440px',
    },
    space: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
        xxl: '128px',
        xxxl: '256px',
        huge: '300px',
    },
    colors: {
        primary: '#a99495',
        secondary: '#D7C2C9',
        accent: '#f28b82',
        textMain: '#c0ccc8e6',
        textMainDeemphasize: '#c0ccc897',
        background: '#283d36',
    },
    fonts: {
        body: 'Open Sans, sans-serif',
        notFoundBold: "'Anton', sans-serif",
        defaultFont: 'Open Sans, sans-serif',
    },
    fontSizes: {
        xs: 'calc(16px - 4px)',
        sm: '16px',
        md: 'calc(16px + 8px)',
        lg: 'calc(16px + 16px)',
        xl: 'calc(16px + 24px)',
        xxl: 'calc(16px + 32px)',
        xxxl: 'calc(16px + 40px)',
        huge: 'calc(16px + 48px)',
    },
    lineHeights: {
        normal: '1.5',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    radii: {
        md: '4px',
        lg: '8px',
    },
    shadows: {
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    transitions: {
        duration: {
            normal: '0.3s',
        },
    },
});

export default theme;
