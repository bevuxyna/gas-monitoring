import 'dayjs/locale/ru';
import GasMeasurementsLine from "../GasMeasurementsLine/GasMeasurementsLine";
import React, {useState} from "react";
import {
    Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormLabel, Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem, Select,
    TextField, Typography
} from "@mui/material";
import {gssItems, objectItems} from './constants';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {FileUploadModal} from '../FileUploadModal/FileUploadModal';
import MainCollectorTable from "../MainCollectorTable/MainCollectorTable";
import DateInput from "../DateInput/DateInput";
import {formatFileSize} from "../../helpers";

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
                        </Grid>
                    </Box>

                    <Typography variant="h6" sx={{mb: 2}}>Данные газового коллектора</Typography>
                    <Box sx={{mb: 3}}>
                        <MainCollectorTable/>
                    </Box>

                    <Typography variant="h6" sx={{mb: 2}}>Данные по скважинам</Typography>
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
                                value={formData.generalComment}
                                onChange={(e) => setFormData({...formData, generalComment: e.target.value})}
                            />
                        </FormControl>
                    </Box>

                    <Typography variant="h6" sx={{mb: 2}}>Документы</Typography>
                    <Box sx={{mb: 3}}>
                        <Box>
                            <Button
                                variant="outlined"
                                color="secondary"
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