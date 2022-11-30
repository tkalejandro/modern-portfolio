import { Box, Button, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import { ContactFormEnums } from '../../../../enums/ContactPage';
import isApiError from '../../../../services/api/apiError';
import { apiServices } from '../../../../services/apiServices';
import { ApiError } from '../../../../types/Api';
import { ContactFormRequest, ContactFormResponse } from '../../../../types/ContactPage';
import { ConfirmationAlert } from './components';


export type MessageType = 'Success' | 'Error' | undefined ; 
export type DialogMessage = {
    messageType?: MessageType
    message?: string
}

/**
 * Contact Form. We will handle our API here.
 * @returns 
 */
const ContactForm = () => {
    const [form, setForm] = useState<ContactFormRequest>({
        name: '',
        email: '',
        message: ''
    })

    const [dialogMessage, setDialogMessage] = useState<DialogMessage | undefined>()


    const clearForm = () => setForm({name: '',email: '',message: ''})
    const clearDialog = () => setDialogMessage(undefined)

    const submit = async (event: { preventDefault: () => void; }): Promise<void> => {
        event.preventDefault()
        
        const submitForm = await apiServices.submitContactForm(form)

        if(isApiError(submitForm)) {
            const {error, code} = submitForm
            if(code === 500) {
                clearForm()
            }
            const dialog : DialogMessage = {
                messageType: 'Error',
                message: error
            }
            setDialogMessage(dialog)
            return
        }
       
        const {message} = submitForm
        const dialog : DialogMessage = {
            messageType: 'Success',
            message: message
        }
        clearForm()
        setDialogMessage(dialog)
    }

    const handleChange = (event: { target: { name: any; value: string; }; }): void => {
        const currentInput = event.target.name
        switch (currentInput) {
            case ContactFormEnums.Name: {
                setForm({ ...form, name: event.target.value })
                break
            }
            case ContactFormEnums.Email: {
                setForm({ ...form, email: event.target.value })
                break
            }
            case ContactFormEnums.Message: {
                setForm({ ...form, message: event.target.value })
                break
            }
        }
    }

    return (
        <>
        <Box
            onSubmit={submit}
            method="post"
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                value={form.name}
                onChange={handleChange}
                name={ContactFormEnums.Name}
                label="Full name"
                placeholder="Alexo Grossi"
            />
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                value={form.email}
                onChange={handleChange}
                name={ContactFormEnums.Email}
                label="Your email"
                placeholder="alexo@grossi.com"
            />
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                value={form.message}
                onChange={handleChange}
                name={ContactFormEnums.Message}
                label="Your message"
                multiline
                rows={5}
                placeholder={`Hello... Buenos dias...\nGuten Tag... 早上好... \n\n...Alejandro / 安黎...`}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'center', mt: 2 }}>
                Send Message
            </Button>
        </Box>
        <ConfirmationAlert dialogMessage={dialogMessage} clearDialog={clearDialog} />
        </>
    );
};

export default ContactForm;
