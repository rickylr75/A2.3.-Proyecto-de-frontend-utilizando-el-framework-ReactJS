// src/services/api.ts

const API_BASE_URL = 'http://localhost:3000/api'; // Ajusta el puerto si tu backend corre en otro

interface RequestOptions extends RequestInit {
    token?: string | null;
}

export const apiFetch = async <T>(endpoint: string, options: RequestOptions = {}): Promise<T> => {
    const { token, headers, ...customOptions } = options;

    const appHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(headers as Record<string, string>),
    };

    if (token) {
        appHeaders['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...customOptions,
        headers: appHeaders,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error HTTP: ${response.status}`);
    }

    // Si la respuesta está vacía (ej. 204 No Content), devolvemos null o un objeto vacío
    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
};