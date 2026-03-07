import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import dayjs from "dayjs";
import GasMeasurementsLine from "../GasMeasurementsLine/GasMeasurementsLine";
import React, { useState } from "react";
import {Box, Button, Card, CardContent, CardHeader, FormControl, FormLabel, Grid, IconButton, InputLabel, List,
    ListItem, ListItemSecondaryAction, ListItemText, MenuItem, OutlinedInput, Select,
    TextField, Typography} from "@mui/material";
import { gssItems, objectItems } from './constants';
import AddIcon from '@mui/icons-material/Add';

function Form() {
    const [gss, setGss] = useState('');
    const [formData, setFormData] = useState();

    return (
        <div>
            <Box>
                <Box>
                    <Card>
                        <CardHeader title="Основная информация" />
                        <CardContent>
                            <Grid container spacing={3}>
                                <FormControl size={'small'}>
                                    <FormLabel required={true}>Дата проведения измерения</FormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru" localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
                                        <DatePicker defaultValue={dayjs(new Date())} disableFuture={true} />
                                    </LocalizationProvider>
                                </FormControl>

                                <FormControl size={'small'}>
                                    <FormLabel required={true}>Газосборная станция</FormLabel>
                                    <Select
                                        labelId='gss-label'
                                        value={gss}
                                        size='small'
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

                                <FormControl size={'small'}>
                                    <FormLabel required={true}>Объект</FormLabel>
                                    <Select
                                        value={gss}
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
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>

                <Box>
                    <Card>
                        <CardHeader title="Данные по скважинам" />
                        <CardContent>
                            <GasMeasurementsLine />
                        </CardContent>
                    </Card>
                </Box>

                <Box>
                    <Card>
                        <CardContent>
                            <FormControl size={'small'} fullWidth>
                                <FormLabel>Общие замечания системы сбора газа</FormLabel>
                                <TextField
                                    multiline
                                    rows={2}
                                    maxRows={4}
                                    fullWidth
                                />
                            </FormControl>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Card>
                        <CardHeader title="Документы" />
                        <CardContent>
                            <Box>
                                <Button
                                    role={undefined}
                                    variant="outlined"
                                    color="primary"
                                    component="label"
                                    size={'small'}
                                    startIcon={<AddIcon />}
                                    sx={{ textTransform: 'none' }}
                                >
                                    Добавить файл
                                    <input
                                        type="file"
                                        hidden
                                        multiple
                                    />
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        size="large"
                    >
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Form;