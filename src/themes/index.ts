import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        danger: true;
        outline: true;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#333b4d',
        },
        secondary: {
            main: '#203bc5',
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
                    color: '#333b4d'
                }
            }
        }
    },
});