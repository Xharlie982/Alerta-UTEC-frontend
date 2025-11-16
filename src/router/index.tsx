import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { UsuarioDashboard } from '../pages/UsuarioDashboard';
import { AppLayout } from '../components/layout/AppLayout';
import { ProtectedRoute } from '../components/common/ProtectedRoute';
import { RoleGuard } from '../components/common/RoleGuard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/usuario',
    element: (
      <ProtectedRoute>
        <RoleGuard allowedRoles={['usuario']}>
          <AppLayout>
            <UsuarioDashboard />
          </AppLayout>
        </RoleGuard>
      </ProtectedRoute>
    ),
  },
]);

