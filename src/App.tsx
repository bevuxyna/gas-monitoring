import React from 'react';
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import {Container} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Header />
            <Container sx={{pt: 4, pb: 4}}>
                <Outlet />
            </Container>
        </div>
    );
}

export default App;