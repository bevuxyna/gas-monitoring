import {Box, Button, Card, Container, FormControl, FormLabel, Grid, MenuItem, Select} from "@mui/material";
import React from "react";
import DateInput from "../../components/DateInput/DateInput";
import {gssItems, objectItems} from "../../components/Form/constants";
import {protocolsColumns} from "./constants";
import {DataGrid} from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';

export default function Protocols() {
    return (
        <Container>
            <Card sx={{p: 2, borderRadius: 4}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Grid container spacing={3}>
                        <FormControl size={'small'}>
                            <FormLabel>Дата проведения измерения</FormLabel>
                            <DateInput/>
                        </FormControl>

                        <FormControl size={'small'}>
                            <FormLabel>Объект</FormLabel>
                            <Select
                                displayEmpty
                                sx={{minWidth: 200}}
                            >
                                {objectItems.map((item) => (
                                    <MenuItem
                                        key={item.valueCode}
                                        value={item.valueCode}
                                    >
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl size={'small'}>
                            <FormLabel>Газосборная станция</FormLabel>
                            <Select
                                displayEmpty
                                sx={{minWidth: 200}}
                            >
                                {gssItems.map((item) => (
                                    <MenuItem
                                        key={item.valueCode}
                                        value={item.valueCode}
                                    >
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                    >
                        Поиск
                    </Button>
                </Box>
            </Card>

            <Card sx={{p: 2, mt: 2, borderRadius: 4}}>
                <DataGrid
                    columns={protocolsColumns}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </Card>
        </Container>
    );
}