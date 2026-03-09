import {Button} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";

export default function Protocols() {
    return (
        <div>
            <h1>Здесь будет таблица с протоколами</h1>
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