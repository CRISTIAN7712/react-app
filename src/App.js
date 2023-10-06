import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Hidden
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NuevoEstudiante from './components/NuevoEstudiante';
import Sustentacion from './components/Sustentacion';
import Cronogramas from './components/Cronogramas';
import Grados from './components/Grados';
import './App.css';  // Asegúrate de crear este archivo con los estilos

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Web BotIS
          </Typography>
          <Hidden smDown>
            <Button color="inherit" href="/">Inicio</Button>
            <Button color="inherit" href="/nuevo-estudiante">Nuevo Estudiante</Button>
            <Button color="inherit" href="/sustentacion">Sustentación</Button>
            <Button color="inherit" href="/cronogramas">Cronogramas</Button>
            <Button color="inherit" href="/grados">Grados</Button>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <List className="drawerList">
          <ListItem button onClick={() => setDrawerOpen(false)} component="a" href="/">
            Inicio
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)} component="a" href="/nuevo-estudiante">
            Nuevo Estudiante
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)} component="a" href="/sustentacion">
            Sustentación
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)} component="a" href="/cronogramas">
            Cronogramas
          </ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)} component="a" href="/grados">
            Grados
          </ListItem>
        </List>
      </Drawer>

      <Container style={{ paddingTop: '20px' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Bienvenido a la Plataforma Educativa</h1>
              <p>Selecciona una opción del menú para comenzar.</p>
            </div>
          } />
          <Route path="/nuevo-estudiante" element={<NuevoEstudiante />} />
          <Route path="/sustentacion" element={<Sustentacion />} />
          <Route path="/cronogramas" element={<Cronogramas />} />
          <Route path="/grados" element={<Grados />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;