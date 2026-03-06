import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import dayjs from "dayjs";
import GasMeasurementsLine from "../GasMeasurementsLine/GasMeasurementsLine";
import React from "react";
import {FormControl, FormLabel} from "@mui/material";

function Form() {
    return (
        <div>
            <FormControl size={'small'} sx={{ m: 1 }}>
                <FormLabel required={true}>Дата измерения</FormLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru" localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
                    <DatePicker defaultValue={dayjs(new Date())} disableFuture={true} />
                </LocalizationProvider>
            </FormControl>

            <GasMeasurementsLine />
        </div>
    )
}

export default Form;