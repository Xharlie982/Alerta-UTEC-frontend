import { useAuth } from '../../hooks/useAuth';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleLabel = () => 'Estudiante';

  const getRoleColor = () => 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';

  return (
    <nav style={{ backgroundColor: '#adcc9c', borderBottom: '1px solid #7d9670' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#4a5a40' }}>AlertaUTEC</h1>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <div className="text-sm" style={{ color: '#4a5a40' }}>
                  <span className="font-medium">{user.nombre}</span>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{ backgroundColor: '#4a5a40', color: '#ffffff', borderColor: '#4a5a40' }}
                >
                  {getRoleLabel()}
                </span>
                <Button variant="secondary" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
