import 'dayjs/locale/ru';
import React, {useState} from "react";
import {
    Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormLabel, Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem, Paper, Select,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    TextField, Typography
} from "@mui/material";
import {gssItems, objectItems} from './constants';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {FileUploadModal} from '../FileUploadModal/FileUploadModal';
import MainCollectorTable from "../MainCollectorTable/MainCollectorTable";
import DateInput from "../DateInput/DateInput";
import {formatFileSize} from "../../helpers";
import {useNotification} from "../../hooks/useNotification";

interface WellData {
    co2: string;
    co: string;
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
    const {showNotification, NotificationComponent} = useNotification();

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
            co: "",
            h2s: "",
            ch4: "",
            pressure: "",
            valve: "",
            comment: "",
        })),
        generalComment: "",
        files: [],
    });

    const handleWellChange = (index: number, field: keyof WellData, value: string) => {
        const newWells = [...formData.wells];
        newWells[index] = {...newWells[index], [field]: value};
        setFormData({...formData, wells: newWells});
    };

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

    const handleSave = () => {
        showNotification('Данные успешно сохранены!', 'success');
    };

    return (
        <Container>
            <Card sx={{p: 2, borderRadius: 4}}>
                <CardHeader title="Протокол мониторинга газосборной станции"/>
                <CardContent>
                    <Typography variant="h6" sx={{mb: 2}}>Основная информация</Typography>
                    <Box sx={{mb: 3}}>
                        <Grid container spacing={3}>
                            <FormControl size={'small'}>
                                <FormLabel required={true}>Дата проведения измерения</FormLabel>
                                <DateInput/>
                            </FormControl>

                            <FormControl size={'small'}>
                                <FormLabel required={true}>Объект</FormLabel>
                                <Select
                                    value={gss}
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
                                <FormLabel required={true}>Газосборная станция</FormLabel>
                                <Select
                                    value={gss}
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
                    </Box>

                    <Typography variant="h6" sx={{mb: 2, mt: 2}}>Данные газового коллектора</Typography>
                    <Box sx={{mb: 3}}>
                        <MainCollectorTable/>
                    </Box>

                    <Typography variant="h6" sx={{mb: 2, mt: 2}}>Данные по скважинам</Typography>
                    <Box sx={{mb: 3}}>
                        <TableContainer component={Paper}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ГС</TableCell>
                                        <TableCell>CH₄ (об.%)</TableCell>
                                        <TableCell>CO₂ (об.%)</TableCell>
                                        <TableCell>CO (об.%)</TableCell>
                                        <TableCell>O₂ (об.%)</TableCell>
                                        <TableCell>H₂S (ppm)</TableCell>
                                        <TableCell>Давление (мбар)</TableCell>
                                        <TableCell>Положение задвижки (%)</TableCell>
                                        <TableCell>Комментарий</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {formData.wells.map((well, index) => (
                                        <TableRow
                                            key={index}
                                        >
                                            <TableCell sx={{fontWeight: 'bold', width: 15}}>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.ch4}
                                                    onChange={(e) => handleWellChange(index, "ch4", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.co2}
                                                    onChange={(e) => handleWellChange(index, "co2", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.co}
                                                    onChange={(e) => handleWellChange(index, "co", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.o2}
                                                    onChange={(e) => handleWellChange(index, "o2", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.h2s}
                                                    onChange={(e) => handleWellChange(index, "h2s", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 80}}>
                                                <TextField
                                                    size="small"
                                                    placeholder="0.0"
                                                    value={well.pressure}
                                                    onChange={(e) => handleWellChange(index, "pressure", e.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell sx={{width: 100}}>
                                                <FormControl size="small" fullWidth>
                                                    <Select
                                                        value={well.valve}
                                                        displayEmpty
                                                        fullWidth
                                                        onChange={(e) => handleWellChange(index, "valve", e.target.value)}
                                                    >
                                                        <MenuItem value="Открыта">Открыта</MenuItem>
                                                        <MenuItem value="Закрыта">Закрыта</MenuItem>
                                                        <MenuItem value="Частично">Частично</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    size="small"
                                                    placeholder="Комментарий"
                                                    value={well.comment}
                                                    fullWidth
                                                    onChange={(e) => handleWellChange(index, "comment", e.target.value)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box sx={{mb: 3}}>
                        <FormControl size={'small'} fullWidth>
                            <FormLabel>Общие замечания системы сбора газа</FormLabel>
                            <TextField
                                multiline
                                rows={2}
                                maxRows={4}
                                fullWidth
                                value={formData.generalComment}
                                onChange={(e) => setFormData({...formData, generalComment: e.target.value})}
                            />
                        </FormControl>
                    </Box>

                    <Typography variant="h6" sx={{mb: 2, mt: 2}}>Документы</Typography>
                    <Box sx={{mb: 3}}>
                        <Box>
                            <Button
                                variant="outlined"
                                size="medium"
                                startIcon={<AddIcon/>}
                                onClick={handleOpenFileDialog}
                            >
                                Добавить файл
                            </Button>
                        </Box>
                        <List>
                            {formData.files.map((fileItem, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={fileItem.description}
                                        secondary={`${fileItem.file.name} (Размер: ${formatFileSize(fileItem.file.size)})`}
                                    />
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleFileDelete(index)}
                                        size="small"
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
                        <Button
                            variant="outlined"
                            size="large"
                            color="inherit"
                        >
                            Закрыть
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            color="success"
                            onClick={handleSave}
                        >
                            Сохранить
                        </Button>
                        {NotificationComponent}
                    </Box>
                </CardContent>
            </Card>

            <FileUploadModal
                open={openFileDialog}
                onClose={handleCloseFileDialog}
                onSave={handleAddFile}
            />
        </Container>
    )
}

export default Form;