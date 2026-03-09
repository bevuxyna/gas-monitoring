export const componentsTheme = {
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
                    color: '#19213d',
                    fontSize: 14,
                    minHeight: 26
                },
                asterisk: {
                    color: '#ff0000',
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '12px',
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    backgroundColor: '#d3f2dd',
                    color: '#009a1b',
                    '& .MuiAlert-icon': {
                        color: '#009a1b',
                    },
                },
                filledError: {
                    backgroundColor: '#ffecef',
                    color: '#d32f2f',
                    '& .MuiAlert-icon': {
                        color: '#d32f2f',
                    },
                },
                filledWarning: {
                    backgroundColor: '#fffae9',
                    color: '#ed6c02',
                    '& .MuiAlert-icon': {
                        color: '#ed6c02',
                    },
                },
                filledInfo: {
                    backgroundColor: '#f5f6f9',
                    color: '#0288d1',
                    '& .MuiAlert-icon': {
                        color: '#0288d1',
                    },
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                }
            }
        }
    },
};