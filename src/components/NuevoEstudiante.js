import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Tab,
    Tabs,
    AppBar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Alert,
} from '@mui/material';


const NuevoEstudiante = () => {
    const [value, setValue] = useState(0);
    const [searchId, setSearchId] = useState('');
    const [estudiante, setEstudiante] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        identificacion: '',
        correo: '',
    });

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    const buscarEstudiante = () => {
        if (searchId === '123') {
            setEstudiante({
                nombres: 'Juan',
                apellidos: 'Pérez',
                correo: 'juan.perez@example.com',
            });
            setError(null);
        } else {
            setError('Estudiante no encontrado');
            setEstudiante(null);
        }
    };

    const handleChangeFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado', formData);
    };

    return (
        <Container component="main" maxWidth="md">
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChangeTabs} variant="fullWidth">
                    <Tab label="Registrar" />
                    <Tab label="Consultar" />
                </Tabs>
            </AppBar>

            {value === 0 && (
                <Box p={3} component={Paper} elevation={3}>
                    <Typography variant="h6">Registrar Nuevo Estudiante</Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Nombres"
                            name="nombres"
                            value={formData.nombres}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Apellidos"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Identificación"
                            name="identificacion"
                            value={formData.identificacion}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Correo Electrónico"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChangeFormData}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '16px' }}
                        >
                            Registrar
                        </Button>
                    </form>
                </Box>
            )}

            {value === 1 && (
                <Box p={3} component={Paper} elevation={3}>
                    <Typography variant="h6">Consultar Estudiante</Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Identificación"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <Button
                        onClick={buscarEstudiante}
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px', marginBottom: '16px' }}
                    >
                        Buscar
                    </Button>

                    {error && <Alert severity="error">{error}</Alert>}

                    {estudiante && (
                        <TableContainer component={Paper} style={{ marginBottom: '16px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombres</TableCell>
                                        <TableCell>Apellidos</TableCell>
                                        <TableCell>Correo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{estudiante.nombres}</TableCell>
                                        <TableCell>{estudiante.apellidos}</TableCell>
                                        <TableCell>{estudiante.correo}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

                    {estudiante && (
                        <Box>
                            <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
                                Editar
                            </Button>
                            <Button variant="contained" color="secondary">
                                Eliminar
                            </Button>
                        </Box>
                    )}
                </Box>
            )}
        </Container>
    );
};

export default NuevoEstudiante;