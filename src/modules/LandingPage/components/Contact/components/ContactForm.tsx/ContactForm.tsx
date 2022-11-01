import { Box, Button, Grid, Link, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { ContactFormEnums } from '../../../../../../enums/LandingPage';
import { ContactFormRequest } from '../../../../../../types/LandingPage';


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
    const theme = useTheme()

    const submit = async (event: { preventDefault: () => void; }): Promise<void> => {
        event.preventDefault()
        try {
            const data = JSON.stringify(form)
            const settings = {
                method: "POST",
                body: data,
            }

            const request = await fetch('api/landingPage/contactForm', settings)

            const response = await request.json()
            
            alert (JSON.stringify(response))
        } catch (e) {
            console.log(e)
        }

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
                error
                value={form.name}
                onChange={handleChange}
                name={ContactFormEnums.Name}
                label="Full name"
                placeholder="Alexo Grossi"
            />
            <TextField
                sx={{ mb: 2 }}
                fullWidth
                error
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
    );
};

export default ContactForm;
