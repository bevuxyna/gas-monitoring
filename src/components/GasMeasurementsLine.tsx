import {Box, FormControl, FormLabel, InputAdornment, OutlinedInput} from "@mui/material";
import React from "react";

function GasMeasurementsLine() {
    return (<Box>
        <FormControl size={'small'} sx={{ m: 1 }}>
            <FormLabel required={true}>CH4</FormLabel>
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </FormControl>

        <FormControl size={'small'} sx={{ m: 1 }}>
            <FormLabel required={true}>CO2</FormLabel>
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </FormControl>

        <FormControl size={'small'} sx={{ m: 1 }}>
            <FormLabel required={true}>O2</FormLabel>
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </FormControl>

        <FormControl size={'small'} sx={{ m: 1 }}>
            <FormLabel required={true}>H2S</FormLabel>
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">ppm</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </FormControl>

        <FormControl size={'small'} sx={{ m: 1 }}>
            <FormLabel required={true}>CO</FormLabel>
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
            />
        </FormControl>
    </Box>)
}

export default GasMeasurementsLine;