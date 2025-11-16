import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { CookieMonster } from '../common/CookieMonster';
import { useSidebar } from '../../context/SidebarContext';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { sidebarVisible, setSidebarVisible } = useSidebar();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5ed' }}>
      <Navbar onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} sidebarVisible={sidebarVisible} />
      <div className="flex">
        <Sidebar visible={sidebarVisible} />
        <main 
          className="flex-1 p-4 md:p-6 transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
      {/* Cookie Monster en todas las páginas */}
      <CookieMonster />
    </div>
  );
}
