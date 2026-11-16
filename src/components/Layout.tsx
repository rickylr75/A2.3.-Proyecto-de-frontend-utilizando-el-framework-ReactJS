import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../hooks/useAuth';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Inter', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.aside`
  width: 230px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MenuLink = styled(NavLink)`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: ${({ theme }) => theme.colors.text};
  }

  &.active {
    background-color: rgba(0, 224, 84, 0.15);
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const Layout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Wrapper>
            <Navbar>
                <Brand>
                    🎬 Cine<span>Bob</span>
                </Brand>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: '#9ab', fontSize: '0.9rem' }}>
                        Hola, <strong style={{ color: '#fff' }}>{user?.nombre || 'Cinéfilo'}</strong>
                    </span>
                    <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
                </div>
            </Navbar>

            <Body>
                <Sidebar>
                    <MenuLink to="/" end>🏠 Inicio / Diario</MenuLink>
                    <MenuLink to="/peliculas">🎞️ Mis Películas</MenuLink>
                    <MenuLink to="/generos">🏷️ Géneros</MenuLink>
                    <MenuLink to="/perfil">👤 Mi Perfil</MenuLink>
                </Sidebar>
                <MainContent>
                    <Outlet />
                </MainContent>
            </Body>
        </Wrapper>
    );
};