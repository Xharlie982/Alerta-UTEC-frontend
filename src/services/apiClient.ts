// NOTE: Este archivo está preparado para cuando el backend esté listo
// Por ahora, los servicios usan datos mock en memoria

const API_URL = import.meta.env.VITE_API_URL;
const WS_URL = import.meta.env.VITE_WS_URL;

// Estas constantes están disponibles para cuando el backend esté listo
export { API_URL, WS_URL };

export interface ApiOptions extends RequestInit {
  token?: string | null;
}

// Helper para hacer peticiones a la API (no usado en modo mock)
export async function apiFetch(
  path: string,
  options: ApiOptions = {}
): Promise<Response> {
  if (!API_URL || API_URL.includes('tu-api')) {
    throw new Error('VITE_API_URL no está configurada. Por favor, crea un archivo .env con la URL de la API.');
  }
  
  const { token, ...fetchOptions } = options;
  
  const url = `${API_URL}${path}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ 
        message: `Error HTTP ${response.status}: ${response.statusText}` 
      }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('No se pudo conectar con el servidor. Verifica que la API esté disponible y que VITE_API_URL esté correctamente configurada.');
    }
    throw error;
  }
}
