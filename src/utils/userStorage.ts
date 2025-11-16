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
    nombre: registeredUser.nombre,
    apellido: registeredUser.apellido,
    codigo: registeredUser.codigo,
  };
}

export function updateRegisteredUser(
  oldEmail: string,
  updates: Partial<Omit<RegisteredUser, 'password'>> & { password?: string }
): RegisteredUser | null {
  const users = getRegisteredUsers();
  const user = users[oldEmail];
  
  if (!user) return null;
  
  // Si el email cambió, necesitamos mover el usuario a la nueva clave
  if (updates.email && updates.email !== oldEmail) {
    // Verificar que el nuevo email no esté en uso
    if (users[updates.email]) {
      return null; // El nuevo email ya está en uso
    }
    
    // Crear nuevo usuario con el email actualizado
    const updatedUser: RegisteredUser = {
      ...user,
      ...updates,
      email: updates.email,
      password: updates.password || user.password,
    };
    
    // Eliminar el usuario antiguo
    delete users[oldEmail];
    
    // Agregar el usuario con el nuevo email
    users[updates.email] = updatedUser;
  } else {
    // Solo actualizar los campos
    users[oldEmail] = {
      ...user,
      ...updates,
      password: updates.password || user.password,
    };
  }
  
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
  return users[updates.email || oldEmail] || null;
}

