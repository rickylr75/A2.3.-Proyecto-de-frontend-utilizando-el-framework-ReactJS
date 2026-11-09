// src/types/index.ts

export interface User {
    id: string | number;
    nombre: string;
    email: string;
    avatar?: string;
    [key: string]: any; // Para campos adicionales que devuelva el backend
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string, userData: User) => void;
    logout: () => void;
}