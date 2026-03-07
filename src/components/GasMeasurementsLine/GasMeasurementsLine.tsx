import {Box, FormControl, FormLabel, Grid, InputAdornment, OutlinedInput} from "@mui/material";
import React from "react";

function GasMeasurementsLine() {
    return (
        <Grid container spacing={2}>
            <FormControl size={'small'}>
                <FormLabel required={true}>CH<sub>4</sub></FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                        maxLength: 3,
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>CO<sub>2</sub></FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>O<sub>2</sub></FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>H<sub>2</sub>S</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">ppm</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>CO</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">об.%</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>Расход</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">м<sup>3</sup>/ч</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>Давление</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">мбар</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 150}}
                />
            </FormControl>

            <FormControl size={'small'}>
                <FormLabel required={true}>Положение задвижки</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    sx={{maxWidth: 200}}
                />
            </FormControl>
        </Grid>
    )
}

export default GasMeasurementsLine;