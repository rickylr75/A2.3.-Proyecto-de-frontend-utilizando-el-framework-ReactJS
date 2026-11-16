import { apiFetch } from './api';
import type { User } from '../types';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export const authService = {
    login: (credentials: LoginCredentials) =>
        apiFetch<LoginResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        }),

    getProfile: (token: string) =>
        apiFetch<User>('/auth/profile', {
            method: 'GET',
            token,
        }),
};