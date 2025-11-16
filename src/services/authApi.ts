// NOTE: Este archivo está preparado para cuando el backend esté listo
// Por ahora, AuthContext maneja todo con loginAs(role) y datos mock

import type { LoginResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL;

// Esta función no se usa en modo mock, pero está lista para cuando haya backend
export async function login(email: string, password: string): Promise<LoginResponse> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usa los botones de login rápido.');
  }

  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
