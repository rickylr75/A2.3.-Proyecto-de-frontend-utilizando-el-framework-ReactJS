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


// Añadir al final de src/types/index.ts

export interface Genero {
  id: string | number;
  nombre: string;
  descripcion: string;
}

export type GeneroInput = Omit<Genero, 'id'>;

export interface Pelicula {
  id: string | number;
  titulo: string;
  director: string;
  anio: number;
  puntuacion: number; // 1 a 5
  resena: string;
  fechaVista: string;
  posterUrl?: string;
  generoId: string | number;
  genero?: Genero; // Por si el backend devuelve el objeto populado
}

export type PeliculaInput = Omit<Pelicula, 'id' | 'genero'>;