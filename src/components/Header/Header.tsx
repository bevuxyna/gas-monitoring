import React from "react";
import {AppBar, Toolbar, Box, alpha, Container, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export default function Header() {
    return (
        <AppBar position="static"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}>
            <Container>
                <StyledToolbar variant="dense" disableGutters>
                    <Logo size={35} />

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to="/protocols">
                                <Button variant="text" size="small">
                                    Протоколы
                                </Button>
                            </NavLink>
                            <NavLink to="/analytics">
                                <Button variant="text" size="small">
                                    Аналитика
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>

                    <Box>
                        <NavLink to="/protocols/form">
                            <Button
                                variant="contained"
                                size="small"
                            >
                                Добавить протокол
                            </Button>
                        </NavLink>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}