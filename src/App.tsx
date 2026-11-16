import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<div><h2>🏠 Diario Reciente</h2><p style={{ color: '#9ab', marginTop: '8px' }}>Bienvenido a tu registro cinematográfico.</p></div>} />
              <Route path="peliculas" element={<div><h2>🎞️ Mis Películas</h2><p style={{ color: '#9ab', marginTop: '8px' }}>Aquí irá el CRUD completo de películas y reseñas.</p></div>} />
              <Route path="generos" element={<div><h2>🏷️ Géneros</h2><p style={{ color: '#9ab', marginTop: '8px' }}>Aquí irá el CRUD completo de géneros.</p></div>} />
              <Route path="perfil" element={<div><h2>👤 Mi Perfil</h2><p style={{ color: '#9ab', marginTop: '8px' }}>Datos del usuario autenticado.</p></div>} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;