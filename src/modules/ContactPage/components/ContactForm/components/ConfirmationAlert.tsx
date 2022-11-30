import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogMessage } from '../ContactForm';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


interface AlertDialogProps {
    dialogMessage?: DialogMessage,
    clearDialog: () => void
}

/**
 * Alert that will appear after sending the message.
 */
const AlertDialog = ({ dialogMessage, clearDialog }: AlertDialogProps): JSX.Element | null => {

    if (dialogMessage == null) {
        return null
    }

    const { message, messageType } = dialogMessage

    return (
        <Dialog
            open={Boolean(message)}
            onClose={clearDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {messageType}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={clearDialog} autoFocus>
                    Okay!
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialog