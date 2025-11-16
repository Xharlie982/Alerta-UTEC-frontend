import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import type { Rol } from '../../types/auth';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: Rol[];
}

export function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.rol)) {
    // Redirigir al dashboard según el rol del usuario
    const roleRoutes: Record<Rol, string> = {
      usuario: '/inicio',
      trabajador: '/trabajador',
      supervisor: '/supervisor',
    };
    return <Navigate to={roleRoutes[user?.rol || 'usuario']} replace />;
  }

  return <>{children}</>;
}

