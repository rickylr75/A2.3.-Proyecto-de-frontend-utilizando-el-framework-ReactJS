import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Ruta provisional de bienvenida / login */}
          <Route path="/login" element={
            <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
              <h1>Iniciar Sesión - A2.3 Proyecto ReactJS</h1>
              <p>Aquí irá el formulario de autenticación contra el backend.</p>
            </div>
          } />

          {/* Ruta principal temporal */}
          <Route path="/" element={
            <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
              <h1>Panel Principal (Privado)</h1>
              <p>Estructura de Emotion y React Router configurada correctamente.</p>
            </div>
          } />

          {/* Redirección por defecto a raíz o login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;