import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import casaIcon from '../../assets/casa.png';
import hojasIcon from '../../assets/hojas.png';
import relojIcon from '../../assets/reloj.png';

interface SidebarProps {
  visible: boolean;
}

export function Sidebar({ visible }: SidebarProps) {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getLinks = () => {
    if (!user) return [];
    return [
      { path: '/inicio', label: 'Inicio', icon: casaIcon },
      { path: '/usuario', label: 'Mis Incidentes', icon: hojasIcon },
      { path: '/historial', label: 'Historial', icon: relojIcon },
    ];
  };

  const links = getLinks();

  return (
    <aside
      className={`border-r min-h-[calc(100vh-4rem)] p-4 hidden md:block relative transition-all duration-300 ${
        visible ? 'w-64' : 'w-0 -translate-x-full border-r-0 overflow-hidden'
      }`}
      style={{ 
        backgroundColor: '#adcc9c', 
        borderColor: '#7d9670',
        flexShrink: 0,
      }}
    >
      <nav className="space-y-2 relative z-10">
        {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(link.path)
                  ? 'text-white'
                  : ''
              }`}
              style={isActive(link.path) 
                ? { backgroundColor: '#4a5a40' }
                : { color: '#4a5a40' }
              }
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.backgroundColor = '#7d9670';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#4a5a40';
                }
              }}
            >
              <img 
                src={link.icon} 
                alt={link.label} 
                className="w-8 h-8"
              />
              <span>{link.label}</span>
            </Link>
        ))}
      </nav>
    </aside>
  );
}
