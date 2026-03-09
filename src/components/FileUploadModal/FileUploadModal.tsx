import React, {useState, useRef} from "react";
import {
    Box, Button, Dialog, DialogTitle, DialogContent, DialogActions,
    FormControl, FormLabel, TextField, Typography, IconButton
} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {styled} from '@mui/material/styles';
import {formatFileSize} from "../../helpers";

interface FileWithDescription {
    file: File;
    description: string;
}

interface FileUploadModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (fileWithDescription: FileWithDescription) => void;
}

const DropZone = styled(Box)(({theme}) => ({
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.default,
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.primary.dark,
    },
}));

const FilePreview = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1.5),
}));

export const FileUploadModal: React.FC<FileUploadModalProps> = ({open, onClose, onSave}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileDescription, setFileDescription] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setSelectedFile(files[0]);
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleRemoveSelectedFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleAddFile = () => {
        if (selectedFile) {
            onSave({
                file: selectedFile,
                description: fileDescription || selectedFile.name
            });
            handleClose();
        }
    };

    const handleClose = () => {
        setSelectedFile(null);
        setFileDescription('');
        setIsDragging(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onClose();
    };

    const handleDropZoneClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Добавление документа</DialogTitle>
            <DialogContent>
                <Box sx={{mt: 2}}>
                    <FormControl fullWidth sx={{mb: 2}}>
                        <FormLabel>Описание документа</FormLabel>
                        <TextField
                            value={fileDescription}
                            onChange={(e) => setFileDescription(e.target.value)}
                            placeholder="Введите описание или название документа"
                            size="small"
                            fullWidth
                        />
                    </FormControl>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        style={{display: 'none'}}
                    />

                    {!selectedFile ? (
                        <DropZone
                            onClick={handleDropZoneClick}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            sx={{
                                borderColor: isDragging ? 'success.main' : 'primary.main',
                                backgroundColor: isDragging ? 'action.hover' : 'background.default',
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1
                            }}>
                                <UploadFileIcon fontSize="small" color="primary"/>
                                <Typography variant="body2" color="textSecondary">
                                    {isDragging ? 'Отпустите файл' : 'Перетащите файл сюда или выберите файл'}
                                </Typography>
                            </Box>
                            <Typography variant="caption" color="textSecondary" sx={{mt: 0.5, display: 'block'}}>
                                Поддерживаемые форматы: PDF, JPG, PNG (до 10 МБ)
                            </Typography>
                        </DropZone>
                    ) : (
                        <Box>
                            <FilePreview>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1, minWidth: 0}}>
                                    <InsertDriveFileIcon fontSize="small" color="primary"/>
                                    <Box sx={{minWidth: 0}}>
                                        <Typography variant="body2" noWrap sx={{maxWidth: '300px'}}>
                                            {selectedFile.name}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {formatFileSize(selectedFile.size)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    size="small"
                                    onClick={handleRemoveSelectedFile}
                                >
                                    <DeleteIcon fontSize="small"/>
                                </IconButton>
                            </FilePreview>
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="inherit" size="small">
                    Отмена
                </Button>
                <Button
                    onClick={handleAddFile}
                    variant="contained"
                    disabled={!selectedFile}
                    size="small"
                >
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    );
};