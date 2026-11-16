import type { Theme } from '@emotion/react';

export const theme: Theme = {
    colors: {
        primary: '#00e054',       // Verde estilo Letterboxd
        secondary: '#ff8000',     // Naranja cine
        background: '#14181c',    // Fondo oscuro principal
        surface: '#1f262e',       // Tarjetas y barras
        text: '#ffffff',
        textSecondary: '#9ab',
        error: '#ef4444',
        success: '#00e054',
        border: '#2c3440',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
    },
};