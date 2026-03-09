import { createTheme } from '@mui/material/styles';
import {paletteTheme} from "./palette";
import {componentsTheme} from "./components";
import {typographyTheme} from "./typography";

export const theme = createTheme({
    ...paletteTheme,
    ...typographyTheme,
    ...componentsTheme,
});