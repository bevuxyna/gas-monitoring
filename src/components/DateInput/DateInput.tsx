import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {ruRU} from "@mui/x-date-pickers/locales";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export default function DateInput() {
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs} adapterLocale="ru"
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
            <DatePicker
                disableFuture={true}
                slotProps={{ textField: { size: 'small' } }}
            />
        </LocalizationProvider>
    );
}
