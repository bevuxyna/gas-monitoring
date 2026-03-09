import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#333b4d',
        },
        secondary: {
            main: '#26627c',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '6px 12px',
                    transition: 'all 0.3s ease',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#333b4d',
                },
                asterisk: {
                    color: '#ff0000',
                },
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '6px',
                }
            }
        },
    },
});