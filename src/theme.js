import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        background: {
            default: '#FAFAFA', // body color
        },
        primary: {
            main: '#ec3946', // main color
        },
        secondary: {
            main: '#fcebec', // secondary color
        },
        tertiary: {
            main: '#a8dadc', // tertiary color
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
            'Arial',
            'Helvetica',
            'serif',
        ].join(','),
        h1: {
            fontFamily: '"Playfair Display", serif', // heading font
            fontSize: '4rem', // main heading size
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Playfair Display", serif', // heading font
            fontSize: '2.5rem', // section heading size
            fontWeight: 600,
        },
        h3: {
            fontFamily: '"Playfair Display", serif', // heading font
            fontSize: '1.5rem', // heading size
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem', // default text size
        },
    },
});

export default theme;
