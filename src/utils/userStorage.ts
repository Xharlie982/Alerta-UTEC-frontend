import type { Usuario } from '../types/auth';

const STORAGE_KEY_USERS = 'alerta_utec_registered_users';

export interface RegisteredUser {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  codigo: string;
}

export function saveRegisteredUser(userData: RegisteredUser): void {
  const users = getRegisteredUsers();
  users[userData.email] = userData;
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

export function getRegisteredUsers(): Record<string, RegisteredUser> {
  const stored = localStorage.getItem(STORAGE_KEY_USERS);
  if (!stored) return {};
  
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

export function getUserByEmail(email: string): RegisteredUser | null {
  const users = getRegisteredUsers();
  return users[email] || null;
}

export function verifyUser(email: string, password: string): RegisteredUser | null {
  const user = getUserByEmail(email);
  if (!user) return null;
  
  if (user.password === password) {
    return user;
  }
  
  return null;
}

export function convertToUsuario(registeredUser: RegisteredUser): Usuario {
  return {
    email: registeredUser.email,
    rol: 'usuario',
    nombre: `${registeredUser.nombre} ${registeredUser.apellido}`,
  };
}

