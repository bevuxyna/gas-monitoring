import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../../assets/logo.png";

export default function Header() {
    return (
        <AppBar position="static" color="inherit">
            <Toolbar>

                <Box
                    component="img"
                    src={logo}
                    alt="Landfill Gas Monitoring"
                    sx={{
                        height: 40,
                        mr: 2
                    }}
                />

                <Typography variant="h6" component="div">
                    Мониторинг системы сбора и обезверживания свалочного газа
                </Typography>

            </Toolbar>
        </AppBar>
    );
}