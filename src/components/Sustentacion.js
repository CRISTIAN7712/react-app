import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@mui/material';

const Sustentacion = () => {
    const [fase, setFase] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para manejar la presentación del formulario
        console.log('Formulario de sustentación enviado');
    };

    const handleChange = (event) => {
        setFase(event.target.value);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Nueva Sustentación
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fecha"
                        label="Fecha"
                        name="fecha"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="hora"
                        label="Hora"
                        name="hora"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="nombreProyecto"
                        label="Nombre del Proyecto"
                        name="nombreProyecto"
                    />
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel id="fase-label">Fase</InputLabel>
                        <Select
                            labelId="fase-label"
                            id="fase"
                            value={fase}
                            label="Fase"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Proyecto'}>Proyecto</MenuItem>
                            <MenuItem value={'Final'}>Final</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lugar"
                        label="Lugar"
                        name="lugar"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="jurados"
                        label="Jurados"
                        name="jurados"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="expositores"
                        label="Expositores"
                        name="expositores"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="asesor"
                        label="Asesor"
                        name="asesor"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Programar Sustentación
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Sustentacion;