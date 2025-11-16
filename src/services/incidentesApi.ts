// NOTE: Este archivo está preparado para cuando el backend esté listo
// Por ahora, useIncidentes maneja todo con datos mock en memoria

import type { Incidente, HistorialItem, IncidenteFilters } from '../types/incidentes';

const API_URL = import.meta.env.VITE_API_URL;

// Estas funciones no se usan en modo mock, pero están listas para cuando haya backend
export async function listarIncidentes(
  filters: IncidenteFilters = {},
  token: string
): Promise<Incidente[]> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usando modo mock.');
  }
  
  const params = new URLSearchParams();
  if (filters.estado) params.append('estado', filters.estado);
  if (filters.tipo) params.append('tipo', filters.tipo);
  if (filters.urgencia) params.append('urgencia', filters.urgencia);

  const queryString = params.toString();
  const path = queryString ? `/incidentes?${queryString}` : '/incidentes';

  const response = await fetch(`${API_URL}${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function crearIncidente(
  data: {
    tipo: string;
    ubicacion: string;
    descripcion: string;
    urgencia: string;
  },
  token: string
): Promise<Incidente> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usando modo mock.');
  }

  const response = await fetch(`${API_URL}/incidentes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function asignarIncidente(id: string, token: string): Promise<Incidente> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usando modo mock.');
  }

  const response = await fetch(`${API_URL}/incidentes/${id}/asignar`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function resolverIncidente(id: string, token: string): Promise<Incidente> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usando modo mock.');
  }

  const response = await fetch(`${API_URL}/incidentes/${id}/resolver`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function obtenerHistorial(
  id: string,
  token: string
): Promise<HistorialItem[]> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('Backend no configurado. Usando modo mock.');
  }

  const response = await fetch(`${API_URL}/incidentes/${id}/historial`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
