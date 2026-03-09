import React, { useState, useCallback } from 'react';
import { Alert, Snackbar, AlertColor } from '@mui/material';

interface NotificationState {
    open: boolean;
    message: string;
    severity: AlertColor;
}

export const useNotification = () => {
    const [notification, setNotification] = useState<NotificationState>({
        open: false,
        message: '',
        severity: 'success',
    });

    const showNotification = useCallback((
        message: string,
        severity: AlertColor = 'success'
    ) => {
        setNotification({
            open: true,
            message,
            severity,
        });
    }, []);

    const hideNotification = useCallback(() => {
        setNotification(prev => ({ ...prev, open: false }));
    }, []);

    const NotificationComponent = (
        <Snackbar
            open={notification.open}
            autoHideDuration={3000}
            onClose={hideNotification}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={hideNotification}
                severity={notification.severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {notification.message}
            </Alert>
        </Snackbar>
    );

    return {
        showNotification,
        hideNotification,
        NotificationComponent,
    };
};