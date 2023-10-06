import React, { useState, useEffect } from 'react';
import {Toaster,toast} from 'react-hot-toast';
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
        Apellidos: '',
        Nombres: '',
        Identificacion: '',
        Correo: '',
    });

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log('Estudiante actualizado:', estudiante);
    }, [estudiante]);

    const buscarEstudiante = async () => {
        try {
            const response = await fetch(`http://localhost:3001/estudiantes/${searchId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) 
            {
                const dataEstudiante = await response.json();

                if (Object.keys(dataEstudiante).length === 0) {
                    toast.error("Estudiante no encontrado")
                    setEstudiante(null);
                    
                } else {
                    
                    setEstudiante(dataEstudiante[0]);
                    setError(null);
                    toast.success('Estudiante encontrado');
                }
            
            } else {
                setError('Estudiante no encontrado');
                
            }
        } catch (error) {
            console.error('Error al buscar el estudiante:', error);
        }
    };
    

    const handleChangeFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado', formData);

        let midata = JSON.stringify(formData)

       

        // Realizar la solicitud de creación del estudiante
        try {
            const response = await fetch('http://localhost:3001/estudiantes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: midata
                
            });

            if (response.ok) {
                setFormData({
                    Nombres: '',
                    Apellidos: '',
                    Identificacion: '',
                    Correo: '',
                });
                toast.success('Estudiante Creado');
            } else {
                // Hubo un error al crear el estudiante
                // Puedes manejar el error de la manera que desees
                toast.error('Error al crear estudiante');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <Container component="main" maxWidth="md">
          
          <div><Toaster position="top-left" reverseOrder={false}/></div>
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
                            name="Nombres"
                            value={formData.Nombres}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Apellidos"
                            name="Apellidos"
                            value={formData.Apellidos}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Identificación"
                            name="Identificacion"
                            value={formData.Identificacion}
                            onChange={handleChangeFormData}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Correo Electrónico"
                            name="Correo"
                            value={formData.Correo}
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

                    {estudiante && ( // Verifica si estudiante tiene datos
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
                            <TableCell>{estudiante.Nombres}</TableCell>
                            <TableCell>{estudiante.Apellidos}</TableCell>
                            <TableCell>{estudiante.Correo}</TableCell>
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