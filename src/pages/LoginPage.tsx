import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../hooks/useAuth';
import { authService } from '../services/authService';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', system-ui, sans-serif;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 400px;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 1.75rem;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 0.9rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #14181c;
  font-weight: 700;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const DemoButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 10px;
  font-size: 0.85rem;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const data = await authService.login({ email, password });
            login(data.token, data.user);
            navigate('/');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al iniciar sesión con el servidor');
        }
    };

    const handleDemoLogin = () => {
        login('demo-token-123', {
            id: 1,
            nombre: 'Ricky Cinéfilo',
            email: 'ricky@cinelog.app',
        });
        navigate('/');
    };

    return (
        <Container>
            <Card>
                <Title>🎬 Cine<span>Bob</span></Title>
                <Subtitle>Tu diario personal de películas y reseñas</Subtitle>

                {error && (
                    <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '12px', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                <Form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <PrimaryButton type="submit">Entrar</PrimaryButton>
                </Form>

                <DemoButton type="button" onClick={handleDemoLogin}>
                    ⚡ Entrar en modo vista previa (sin backend)
                </DemoButton>
            </Card>
        </Container>
    );
};