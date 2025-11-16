import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getLinks = () => {
    if (!user) return [];
    return [{ path: '/usuario', label: 'Mis Incidentes', icon: '📋' }];
  };

  const links = getLinks();

  return (
    <aside className="border-r w-64 min-h-[calc(100vh-4rem)] p-4 hidden md:block relative" style={{ backgroundColor: '#adcc9c', borderColor: '#7d9670' }}>
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
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
