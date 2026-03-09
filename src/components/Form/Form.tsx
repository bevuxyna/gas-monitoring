import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import {ruRU} from '@mui/x-date-pickers/locales';
import dayjs from "dayjs";
import GasMeasurementsLine from "../GasMeasurementsLine/GasMeasurementsLine";
import React, {useState} from "react";
import {
    Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormLabel, Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem, Select, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField, Typography
} from "@mui/material";
import {gssItems, objectItems} from './constants';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {FileUploadModal} from '../FileUploadModal/FileUploadModal';

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
        wells: Array.from({length: 16}, () => ({
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
        setFormData({...formData, files: newFiles});
    };

    return (
        <Container sx={{py: 4}}>
            <Card>
                <CardHeader title="Протокол мониторинга газосборной станции"/>
                <CardContent>
                    <Typography>Основная информация</Typography>
                    <Box sx={{mb: 3}}>
                        <Grid container spacing={3}>
                            <FormControl size={'small'}>
                                <FormLabel required={true}>Дата проведения измерения</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru"
                                                      localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
                                    <DatePicker defaultValue={dayjs(new Date())} disableFuture={true}/>
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
                    </Box>

                    <Typography>Данные газового коллектора</Typography>
                    <Box sx={{mb: 3}}>
                        <TableContainer>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        CH<sub>4</sub>, об.%
                                    </TableCell>
                                    <TableCell>
                                        CO<sub>2</sub>, об.%
                                    </TableCell>
                                    <TableCell>
                                        O<sub>2</sub>, об.%
                                    </TableCell>
                                    <TableCell>
                                        H<sub>2</sub>S, ppm
                                    </TableCell>
                                    <TableCell>
                                        CO, об.%
                                    </TableCell>
                                    <TableCell>
                                        Расход, м<sup>3</sup>/ч
                                    </TableCell>
                                    <TableCell>
                                        Давление, мбар
                                    </TableCell>
                                    <TableCell>
                                        Положение задвижки, %
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        До оптимизации
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 60 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 60 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 60 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 60 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 60 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 80 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 80 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 80 }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        После оптимизации
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 70 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 85 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 90 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            placeholder="0.0"
                                            sx={{ width: 80 }}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>

                        </TableContainer>
                    </Box>

                    <Typography>Данные по скважинам</Typography>
                    <Box sx={{mb: 3}}>
                        <GasMeasurementsLine/>
                    </Box>

                    <Box sx={{mb: 3}}>
                        <FormControl size={'small'} fullWidth>
                            <FormLabel>Общие замечания системы сбора газа</FormLabel>
                            <TextField
                                multiline
                                rows={2}
                                maxRows={4}
                                fullWidth
                            />
                        </FormControl>
                    </Box>

                    <Typography>Документы</Typography>
                    <Box sx={{mb: 3}}>
                        <Box>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="medium"
                                startIcon={<AddIcon/>}
                                onClick={handleOpenFileDialog}
                                sx={{textTransform: 'none'}}
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
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </CardContent>
            </Card>

            <FileUploadModal
                open={openFileDialog}
                onClose={handleCloseFileDialog}
                onSave={handleAddFile}
            />

            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
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
                    color="secondary"
                >
                    Сохранить
                </Button>
            </Box>
        </Container>
    )
}

export default Form;