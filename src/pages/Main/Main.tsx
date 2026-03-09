import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";

export default function Main() {
    return (
        <div>
            <h1>Главная страница</h1>

            <NavLink to="/protocols/form">
                <Button
                    variant="contained"
                    size="small"
                >
                    Добавить протокол
                </Button>
            </NavLink>
        </div>
    );
}