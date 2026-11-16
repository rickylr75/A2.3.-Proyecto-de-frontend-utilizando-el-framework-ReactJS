import { apiFetch } from './api';
import type { Genero, GeneroInput } from '../types';

export const generosService = {
    getAll: (token: string) =>
        apiFetch<Genero[]>('/generos', { method: 'GET', token }),

    getById: (id: string | number, token: string) =>
        apiFetch<Genero>(`/generos/${id}`, { method: 'GET', token }),

    create: (data: GeneroInput, token: string) =>
        apiFetch<Genero>('/generos', {
            method: 'POST',
            body: JSON.stringify(data),
            token,
        }),

    update: (id: string | number, data: GeneroInput, token: string) =>
        apiFetch<Genero>(`/generos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            token,
        }),

    delete: (id: string | number, token: string) =>
        apiFetch<void>(`/generos/${id}`, {
            method: 'DELETE',
            token,
        }),
};