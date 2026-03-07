import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import dayjs from "dayjs";
import GasMeasurementsLine from "../GasMeasurementsLine/GasMeasurementsLine";
import React, { useState } from "react";
import {
    Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormLabel, Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem, Select,
    TextField, Typography
} from "@mui/material";
import { gssItems, objectItems } from './constants';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { FileUploadModal } from '../FileUploadModal/FileUploadModal';

interface WellData {
    co2: string;
    o2: string;
    h2s: string;
    ch4: string;
    pressure: string;
    valve: string;
    comment: string;
}

interface FileWithDescription {
    file: File;
    description: string;
}

interface MonitoringData {
    date: string;
    station: string;
    facility: string;
    temperature: string;
    windSpeed: string;
    atmosphericPressure: string;
    wells: WellData[];
    generalComment: string;
    files: FileWithDescription[];
}

function Form() {
    const [gss, setGss] = useState('');
    const [openFileDialog, setOpenFileDialog] = useState(false);

    const [formData, setFormData] = useState<MonitoringData>({
        date: new Date().toISOString().split('T')[0],
        station: "",
        facility: "",
        temperature: "",
        windSpeed: "",
        atmosphericPressure: "",
        wells: Array.from({ length: 16 }, () => ({
            co2: "",
            o2: "",
            h2s: "",
            ch4: "",
            pressure: "",
            valve: "",
            comment: "",
        })),
        generalComment: "",
        files: [],
    });

    const handleOpenFileDialog = () => {
        setOpenFileDialog(true);
    };

    const handleCloseFileDialog = () => {
        setOpenFileDialog(false);
    };

    const handleAddFile = (fileWithDescription: FileWithDescription) => {
        setFormData({
            ...formData,
            files: [...formData.files, fileWithDescription]
        });
    };

    const handleFileDelete = (index: number) => {
        const newFiles = formData.files.filter((_, i) => i !== index);
        setFormData({ ...formData, files: newFiles });
    };

    return (
        <Container maxWidth="xl" sx={{py: 4}}>
            <Box>
                <Typography variant="h4">
                    Журнал мониторинга газосборной станции {gss}
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
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

            <Box sx={{ mb: 3 }}>
                <Card>
                    <CardHeader title="Данные газового коллектора" />
                    <CardContent>
                        <Typography>До оптимизации</Typography>
                        <GasMeasurementsLine />

                        <Typography>После оптимизации оптимизации</Typography>
                        <GasMeasurementsLine />
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Card>
                    <CardHeader title="Данные по скважинам" />
                    <CardContent>
                        <GasMeasurementsLine />
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ mb: 3 }}>
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
                                variant="outlined"
                                color="primary"
                                size="medium"
                                startIcon={<AddIcon />}
                                onClick={handleOpenFileDialog}
                                sx={{ textTransform: 'none' }}
                            >
                                Добавить файл
                            </Button>
                        </Box>
                        <List>
                            {formData.files.map((fileItem, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={fileItem.description}
                                        secondary={`${fileItem.file.name} (Размер: ${fileItem.file.size} байт)`}
                                    />
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleFileDelete(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Box>

            <FileUploadModal
                open={openFileDialog}
                onClose={handleCloseFileDialog}
                onSave={handleAddFile}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    sx={{mr: 2}}
                >
                    Закрыть
                </Button>
                <Button
                    variant="contained"
                    size="large"
                >
                    Сохранить
                </Button>
            </Box>
        </Container>
    )
}

export default Form;