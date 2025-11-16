import type { Usuario } from '../types/auth';

export const mockUsuarios: Record<string, Usuario> = {
  usuario: {
    email: 'estudiante@utec.edu.pe',
    rol: 'usuario',
    nombre: 'Juan Pérez',
  },
  trabajador: {
    email: 'trabajador@utec.edu.pe',
    rol: 'trabajador',
    nombre: 'María González',
  },
  supervisor: {
    email: 'supervisor@utec.edu.pe',
    rol: 'supervisor',
    nombre: 'Carlos Rodríguez',
  },
};

export const mockTokens: Record<string, string> = {
  usuario: 'mock-token-usuario-12345',
  trabajador: 'mock-token-trabajador-12345',
  supervisor: 'mock-token-supervisor-12345',
};

