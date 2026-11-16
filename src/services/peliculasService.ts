import { apiFetch } from './api';
import type { Pelicula, PeliculaInput } from '../types';

export const peliculasService = {
    getAll: (token: string) =>
        apiFetch<Pelicula[]>('/peliculas', { method: 'GET', token }),

    getById: (id: string | number, token: string) =>
        apiFetch<Pelicula>(`/peliculas/${id}`, { method: 'GET', token }),

    create: (data: PeliculaInput, token: string) =>
        apiFetch<Pelicula>('/peliculas', {
            method: 'POST',
            body: JSON.stringify(data),
            token,
        }),

    update: (id: string | number, data: PeliculaInput, token: string) =>
        apiFetch<Pelicula>(`/peliculas/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            token,
        }),

    delete: (id: string | number, token: string) =>
        apiFetch<void>(`/peliculas/${id}`, {
            method: 'DELETE',
            token,
        }),
};