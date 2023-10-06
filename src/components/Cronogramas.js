import React, { useState } from 'react';
import { Container, Tab, Tabs, Box, TextField, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cronogramas = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [rows, setRows] = useState([{ fecha: '', actividad: '', requisito: '' }]);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleInputChange = (index, event) => {
        const values = [...rows];
        values[index][event.target.name] = event.target.value;
        setRows(values);
    };

    const handleAddRow = () => {
        setRows([...rows, { fecha: '', actividad: '', requisito: '' }]);
    };

    const handleRemoveRow = (index) => {
        const values = [...rows];
        values.splice(index, 1);
        setRows(values);
    };

    return (
        <Container>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Cronograma A" />
                    <Tab label="Cronograma B" />
                </Tabs>

                {(selectedTab === 0 || selectedTab === 1) && (
                    <Box component="form" sx={{ mt: 3, width: '100%' }}>
                        {rows.map((row, idx) => (
                            <Box key={idx} display="flex" alignItems="center" mb={2}>
                                <TextField
                                    name="fecha"
                                    type="date"
                                    label="Fecha"
                                    value={row.fecha}
                                    onChange={(e) => handleInputChange(idx, e)}
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    sx={{ mr: 2 }}
                                />
                                <TextField
                                    name="actividad"
                                    label="Actividad"
                                    value={row.actividad}
                                    onChange={(e) => handleInputChange(idx, e)}
                                    required
                                    sx={{ mr: 2 }}
                                />
                                <TextField
                                    name="requisito"
                                    label="Requisito"
                                    value={row.requisito}
                                    onChange={(e) => handleInputChange(idx, e)}
                                    required
                                    sx={{ mr: 2 }}
                                />
                                <IconButton onClick={handleAddRow} color="primary">
                                    <AddCircleOutlineIcon />
                                </IconButton>
                                {rows.length > 1 && (
                                    <IconButton onClick={() => handleRemoveRow(idx)} color="secondary">
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>
                                )}
                            </Box>
                        ))}

                        <Button type="submit" variant="contained" color="primary">
                            Guardar
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Cronogramas;